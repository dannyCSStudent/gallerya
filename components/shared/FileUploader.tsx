import React, { Dispatch, SetStateAction } from 'react'

type FileUploadTypes = {
    imageUrl: string
    onFileChange: (value: string) => void
    setFiles: Dispatch<SetStateAction<File[]>>
}

const FileUploader = ({ imageUrl, onFileChange, setFiles}: FileUploadTypes) => {
  return (
    <div>FileUploader</div>
  )
}

export default FileUploader