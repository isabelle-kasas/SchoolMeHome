import React, { useEffect, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import Slide from './Slide';
import { SlideInterface } from './interfaces';
import './SlideCreation.css'
import Button from '../global/button/Button';
import CKEditor from 'ckeditor4-react';



const SlideCreation = () => {

  const [ActiveContent, setActiveContent] = useState<string>('')
  const [slideList, setSlideList] = useState<SlideInterface[]>([{ content: '', isActive: true }])

  const addSlide = () => {
    const slideListCopy = slideList.slice()
    slideListCopy.filter(slide => slide.isActive)[0].isActive = false;
    setActiveContent('')
    setSlideList([...slideList, { content: '', isActive: true }])
  }

  const changeSlide = (index: number) => {
    const slideListCopy = slideList.slice()
    slideListCopy.forEach(slide => slide.isActive = false)
    slideListCopy.filter((slide, i) => i === index)[0].isActive = true;
    setSlideList(slideListCopy)
    setActiveContent(slideListCopy.find((slide, i) => i === index)!.content)
  }

  const handleDelete = (e: any, index: number) => {
    e.stopPropagation();
    if (slideList.length > 1) {
      let slideListCopy = slideList.slice()
      slideListCopy = slideListCopy.filter((slide, i) => i !== index)
      if (!slideListCopy.find(slide => slide.isActive)) {
        slideListCopy[slideListCopy.length - 1].isActive = true
      }
      setSlideList(slideListCopy)
      setActiveContent(slideListCopy[slideListCopy.length - 1]!.content)
    }
  }

  return (
    <div className="slideCreation-container">
      <div className="editor-container">
        <Editor
          initialValue=""
          value={ActiveContent}
          init={{
            paste_data_images: true,
            height: 800,
            menubar: true,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help'
          }}
          onEditorChange={content => {
            const slideListCopy = slideList.slice()
            slideListCopy.filter(slide => slide.isActive)[0].content = content;
            setSlideList(slideListCopy)
            setActiveContent(content)
          }}
        />
        {/* <CKEditor
          type="inline"
          data={ActiveContent}
          onChange={(event: any) => {
            const slideListCopy = slideList.slice()
            console.log(slideListCopy)
            slideListCopy.filter(slide => slide.isActive)[0].content = event.editor.getData();
            setSlideList(slideListCopy)
            setActiveContent(event.editor.getData())
          }}
        /> */}
      </div>
      <div className="slideCreation-rigth-container">
        <div className="slides-container">
          <h2>Slide show</h2>
          {slideList.map((slide: SlideInterface, index) => {
            return (
              <Slide slide={slide} index={index} changeSlide={changeSlide} handleDelete={handleDelete} />
            )
          })}
        </div>
        <Button onClick={addSlide}>Ajouter</Button>
      </div>
    </div>
  )
}

export default SlideCreation
