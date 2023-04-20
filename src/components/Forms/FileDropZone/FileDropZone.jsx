import React, { useState } from "react";
import PropTypes from "prop-types";
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
export default function FileDropZone({
  onSelected = () => {},
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
    onSelected(selectedFiles);
  }, [selectedFiles]);
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
      <input type="file" name="" id="" />
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
}
FileDropZone.propTypes = {
  /** `hint` is a place holder or hint for users in the dropzone.  */
  hint: PropTypes.string,
  /**
   * `onSelected` is fired when files are loaded from users system and provides files in the args.
   */
  onSelected: PropTypes.func,
  /**
   * `noMultiple` tells wheter or not multiple file selection is allowed or not.
   */
  noMultiple: PropTypes.bool,
  /**
   * `disabled` disables file selection.
   */
  disabled: PropTypes.bool,
};
