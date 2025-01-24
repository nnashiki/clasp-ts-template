export interface ErrorFile {
  sourceSystemFileId: string
  createdAt: string // ISO 8601 format
}

export interface ErrorFiles {
  errorFiles: ErrorFile[]
}
