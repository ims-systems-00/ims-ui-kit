import React, { useState } from "react";
import PorpTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import { Card, CardBody, Col, Progress, Row, Spinner } from "reactstrap";
function bytesToSize(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "n/a";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  if (i === 0) return `${bytes} ${sizes[i]})`;
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}
function Attachment({ file, name, onDelete, ...props }) {
  let [processing, setProcessing] = useState({
    action: null,
    id: null,
  });
  let [uploading, setUploading] = useState({ status: false, progress: 0 });
  return (
    <Col md="4">
      <Card className="card-attachments border border-default">
        <CardBody>
          <h5 className="mb-1">
            <i className="tim-icons icon-paper" /> {file.path}{" "}
          </h5>
          <h5 className="m-0">
            {!processing.action ? (
              <i
                onClick={(e) => onDelete(file)}
                className="tim-icons icon-simple-remove text-danger"
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

export default function FileDropZone({
  onLoad = () => {},
  hint = "Drag 'n' drop, or click to select files",
  ...props
}) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const onDrop = React.useCallback(
    (acceptedFiles, rejectedFiles) => {
      let duplicatePaths = selectedFiles.map((file) => file.path) || [];
      acceptedFiles = acceptedFiles.filter(
        (file) => !duplicatePaths.includes(file.path)
      );
      setSelectedFiles((previousFiles) => [...previousFiles, ...acceptedFiles]);
    },
    [selectedFiles]
  );
  React.useEffect(() => {
    onLoad(selectedFiles);
  }, [selectedFiles]);
  React.useEffect(() => {
    props.clearAll && setSelectedFiles([]);
  }, [props.clearAll]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    ...(props.acceptedFileTypes && { accept: props.acceptedFileTypes }),
    multiple: props.noMultiple ? false : true,
    disabled: props.disabled,
  });
  const handleRemove = (deleteFile) =>
    setSelectedFiles((prevFiles) =>
      prevFiles.filter((file) => file.path !== deleteFile.path)
    );
  return (
    <section>
      <div {...getRootProps({ className: "Filedropzone" })}>
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
}
