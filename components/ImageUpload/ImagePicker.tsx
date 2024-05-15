"use client";
import React, { useRef, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import Image from "next/image";
import classes from "@/components/ImageUpload/ImagePicker.module.css";

const ImagePicker = ({ label, name }: { label?: any; name?: any }) => {
  const [pickedImage, setPickedImage]: any = useState();
  const imageInput: any = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event: any) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(undefined);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="The image selected by the user." fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} type="button" onClick={handlePickClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
