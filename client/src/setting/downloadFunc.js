import { saveAs } from 'file-saver';
export const download = (fileUrl, name) => {
    saveAs(fileUrl, name)
}