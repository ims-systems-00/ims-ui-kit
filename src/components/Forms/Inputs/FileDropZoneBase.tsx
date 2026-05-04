import React, { useState, useCallback, useEffect } from "react";
import {
  useDropzone,
  FileRejection,
  FileWithPath,
  DropzoneInputProps,
} from "react-dropzone";
import Card from "../../Cards/CardBase";
import Col from "../../Grid/ColBase";
import Progress from "../../Progress/ProgressBase";
import Row from "../../Grid/RowBase";
import Spinner from "../../Spinner/SpinnerBase";
import CardBody from "../../Cards/CardBodyBase";

function bytesToSize(bytes: number) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "n/a";
  const i = parseInt(
    Math.floor(Math.log(bytes) / Math.log(1024)).toString(),
    10
  );

  if (i === 0) return `${bytes} ${sizes[i]})`;
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}

interface AttachmentProps {
  file: FileWithPath;
  name?: string;
  onDelete: (file: FileWithPath) => void;
}

function Attachment({ file, name, onDelete, ...props }: AttachmentProps) {
  let [processing, setProcessing] = useState<{
    action: string | null;
    id: string | null;
  }>({
    action: null,
    id: null,
  });
  let [uploading, setUploading] = useState({ status: false, progress: 0 });

  return (
    <Col md="4">
      <Card className="">
        <CardBody>
          <h5 className="mb-1">
            <i className="tim-icons icon-paper" /> {file.path}{" "}
          </h5>
          <h5 className="m-0">
            {!processing.action ? (
              <i
                onClick={(e) => onDelete(file)}
                className="tim-icons icon-simple-remove"
              />
            ) : (
              <Spinner color="text-damger" size={"sm"} />
            )}{" "}
            <small>{bytesToSize(file.size)}</small>
          </h5>
          {uploading.status && uploading.progress < 100 && (
            <Progress value={uploading.progress} />
          )}
        </CardBody>
      </Card>
    </Col>
  );
}
/**
 * File drop zone can be used in any form elements along with other bootstrap forms. Allows users to
 * direct file drag and drop from their machine or just simply select ability by clicking anywhere on it
 */

export interface FileDropZoneBaseProps extends DropzoneInputProps {
  hint?: string;
  onSelected?: (files: FileWithPath[]) => void;
  noMultiple?: boolean;
  disabled?: boolean;
  acceptedFileTypes?: any;
  name?: string;
}

const FileDropZoneBase: React.FC<FileDropZoneBaseProps> = ({
  onSelected = () => {},
  hint = "Drag 'n' drop, or click to select files",
  ...props
}) => {
  const [selectedFiles, setSelectedFiles] = useState<FileWithPath[]>([]);

  const onDrop = useCallback(
    <T extends FileWithPath>(
      acceptedFiles: T[],
      rejectedFiles: FileRejection[]
    ) => {
      let duplicatePaths = selectedFiles.map((file) => file.path) || [];
      acceptedFiles = acceptedFiles.filter(
        (file) => !duplicatePaths.includes(file.path)
      );
      setSelectedFiles((previousFiles) => [...previousFiles, ...acceptedFiles]);
    },
    [selectedFiles]
  );

  useEffect(() => {
    onSelected(selectedFiles);
  }, [selectedFiles]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    ...(props.acceptedFileTypes && { accept: props.acceptedFileTypes }),
    multiple: props.noMultiple ? false : true,
    disabled: props.disabled,
  });

  const handleRemove = (deleteFile: FileWithPath) =>
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((file) => file.path !== deleteFile.path)
    );

  return (
    <section>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>{hint}</p>
      </div>
      <aside>
        <Row>
          {selectedFiles.map((file) => (
            <Attachment
              key={file.path}
              file={file}
              name={props.name}
              onDelete={handleRemove}
            />
          ))}
        </Row>
      </aside>
    </section>
  );
};

export default FileDropZoneBase;
