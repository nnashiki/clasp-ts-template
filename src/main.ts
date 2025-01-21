import { writeJsonToDriveFolder, readJsonFromDriveFolder } from './gdrvie'

/**
 * main 関数
 * Clasp で実行したとき、またはトリガーで呼ばれたときに動作する想定
 */
export const main = () => {
  // 任意で書き換えてください
  const folderId = 'ここに書き込み先のフォルダID'
  const fileName = 'sample.json'

  // 1. JSON を書き込む
  const dataToSave = {
    message: 'Hello, Drive!',
    createdAt: new Date().toISOString(),
  }
  const newFileId = writeJsonToDriveFolder(folderId, fileName, dataToSave)
  console.log(`JSONファイルを作成しました。fileId: ${newFileId}`)

  // 2. JSON を読み込む
  const readData = readJsonFromDriveFolder(folderId, fileName)
  console.log('読み込んだ JSON:', readData)
}
