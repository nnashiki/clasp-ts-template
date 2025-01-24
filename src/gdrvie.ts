import { ErrorFiles } from './types'

/**
 * Google Drive の指定フォルダに JSON を書き込む関数
 * @param folderId JSON を書き込みたいフォルダのID
 * @param fileName 作成するファイルの名前 (例: "data.json")
 * @param data     書き込みたいデータ (オブジェクトを想定)
 * @returns 作成したファイルの fileId
 */
export function writeJsonToDriveFolder(
  folderId: string,
  fileName: string,
  data: unknown
): string {
  const folder = DriveApp.getFolderById(folderId)
  const blob = Utilities.newBlob(
    JSON.stringify(data),
    'application/json',
    fileName
  )
  const file = folder.createFile(blob)
  return file.getId()
}

/**
 * Google Drive の指定フォルダにある JSON を読み込む関数
 * @param folderId 読み込みたいファイルが置いてあるフォルダのID
 * @param fileName 読み込みたいファイルの名前
 * @returns JSON をパースしたオブジェクト
 */
export function readJsonFromDriveFolder(
  folderId: string,
  fileName: string
): any {
  const folder = DriveApp.getFolderById(folderId)
  const files = folder.getFilesByName(fileName)

  if (!files.hasNext()) {
    throw new Error(
      `ファイル「${fileName}」がフォルダ ID: ${folderId} に見つかりませんでした。`
    )
  }

  const file = files.next()
  const content = file.getBlob().getDataAsString()
  return JSON.parse(content)
}

/**
 * Google Drive の指定フォルダに error.json を書き込む関数
 * @param folderId JSON を書き込みたいフォルダのID
 * @returns 作成したファイルの fileId
 */
export function writeErrorJsonToDriveFolder(
  folderId: string,
  errorData: ErrorFiles
): string {
  return writeJsonToDriveFolder(folderId, 'error.json', errorData)
}
