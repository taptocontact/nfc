import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  TextAreaField,
  Submit,
  SelectField,
} from '@redwoodjs/forms'
import { storage } from "src/Utils/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import ImageSelector from 'src/components/ImageSelector/ImageSelector';
import { useState } from 'react';


const CardForm = (props) => {
  const onSubmit = (data) => {
    if (url=='' || file) {
      const storageRef = ref(storage, `cards/${data['type']}/${data['name']}.jpg`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Track upload progress
          // You can use snapshot.bytesTransferred and snapshot.totalBytes
        },
        (error) => {
          console.error(error.message);
        },
        async () => {
          // Handle successful upload
          console.log("File uploaded successfully!");

          // Get the download URL
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("Download URL:", downloadURL);
            setUrl(downloadURL)
            data['imageUrl'] = downloadURL
            props.onSave(data, props?.card?.id)
          } catch (error) {
            console.error("Error getting download URL:", error.message);
          }
        }
      );
    } else {
      console.error("No file selected!");
    }

  }

  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(props?.card?.imageUrl || '')

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };




  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.card?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="color"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Color
        </Label>

        <TextField
          name="color"
          defaultValue={props.card?.color}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="color" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>

        <NumberField
          name="price"
          defaultValue={props.card?.price}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="price" className="rw-field-error" />
        {/*
        <Label
          name="imageUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image url
        </Label>

        <TextField
          name="imageUrl"
          defaultValue={props.card?.imageUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="imageUrl" className="rw-field-error" /> */}
        <div className='text-center'>
          <ImageSelector id='logo' Label='Card Image' allowMultiple={false} url={url} handleFileChange={handleFileChange}
          setUrl={setUrl}
          />

        </div>



        {/* <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>

        <TextField
          name="type"
          defaultValue={props.card?.type}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="type" className="rw-field-error" /> */}

        <div className='text-black'>


          <Label
            name="type"
            className="rw-label"
            errorClassName="rw-label rw-label-error"
          >
            Select the Type
          </Label>

          <SelectField
            name="type"
            validation={{
              required: true,
              validate: {
                matchesInitialValue: (value) => {
                  return (
                    value !== 'Please select an option' || 'Select an Option'
                  )
                },
              },
            }}
          >
            <option>Please select an option</option>
            <option value={'gold'}>gold</option>
            <option value={'silver'}>silver</option>
            <option value={'google gold'}>google gold</option>
            <option value={'google silver'}>google silver</option>


          </SelectField>

          <FieldError name="roles" className="rw-field-error" />
        </div>

        <Label
          name="extra"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Extra
        </Label>

        <TextAreaField
          name="extra"
          defaultValue={JSON.stringify(props.card?.extra)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsJSON: true }}
        />

        <FieldError name="extra" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CardForm
