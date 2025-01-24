import {
  writeErrorJsonToDriveFolder,
  writeJsonToDriveFolder,
  readJsonFromDriveFolder,
} from './gdrvie'
import { ErrorFiles } from './types'

/**
 * main 関数
 * Clasp で実行したとき、またはトリガーで呼ばれたときに動作する想定
 */
export const main = () => {
  // 任意で書き換えてください
  const folderId = ''
  const fileName = 'sample.json'

  // error.json を書き込む
  const errorData: ErrorFiles = {
    errorFiles: [
      {
        sourceSystemFileId: '1',
        createdAt: new Date().toISOString(),
      },
    ],
  }
  const newFileId = writeErrorJsonToDriveFolder(folderId, errorData)
  console.log(`error.json を作成しました。fileId: ${newFileId}`)

  // JSON を書き込む
  const dataToSave = {
    message: 'Hello, Drive!',
    createdAt: new Date().toISOString(),
  }
  const newFileId2 = writeJsonToDriveFolder(folderId, fileName, dataToSave)
  console.log(`JSONファイルを作成しました。fileId: ${newFileId2}`)

  // JSON を読み込む
  const readData = readJsonFromDriveFolder(folderId, fileName)
  console.log('読み込んだ JSON:', readData)
}
