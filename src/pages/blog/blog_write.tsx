import React from 'react';

import ReactQuill, { Quill } from 'react-quill';
import ImageResize from 'quill-image-resize-module-react';
import 'react-quill/dist/quill.snow.css';


import Section0 from '../../components/header/Section0';

import '../../style/main_menu/blog/blog_main.scss'


Quill.register('modules/imageResize', ImageResize);


const modules = {
    toolbar: {
        container: [
            [{ 'font': [] }, { 'size': [] }],
            [ 'bold', 'italic', 'underline', 'strike' ],
            [{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }],
            [ 'direction', { 'align': [] }],

            [{ 'color': [] }, { 'background': [] }],

            ['blockquote', 'code-block'],
            [ 'link', 'image', 'video', 'formula' ],

            [ 'clean' ]
        ],
    },

    imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize']
    },



}


const Blog_write = () => {

    



  return (
    <div className='blogMainStyle'>
        

        <div className='mainSection_wrap'>
            <div className='mainSection'>

                <input type="text" />

                <ReactQuill
                    modules={modules}
                />
                
            </div>
        </div>
    </div>
  );
};

export default Blog_write;