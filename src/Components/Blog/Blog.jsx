
import React from 'react';
import ReactDOM from 'react-dom';
import { PDFExport } from '@progress/kendo-react-pdf';

const Blog = () => {
  // className=' text-lg mx-3 px-4 py-2 border-2 rounded-lg'
  const pdfExportComponent  = React.useRef(null);
  const handleDownload = () => {
    
    pdfExportComponent.current.save();
  };
  return (
    <div className='my-7'>
      <div className='my-2 flex justify-center'>
      <div>
        <button className=' text-lg mx-3 px-4 py-2 border-2 rounded-lg' onClick={handleDownload}>Download as PDF</button>
      </div>
      </div>
      
     <PDFExport fileName='blog.pdf' ref={pdfExportComponent}>
     <h1 className='text-center text-4xl text-lime-400 font-mono font-bold my-2'>Blogs</h1>
     <div className='grid grid-cols-2 gap-6 '>
        <div className='bg-zinc-100 mx-5 hover:scale-110 hover:bg-amber-200 rounded-lg transform transition-transform duration-1000  border-4 border-t-transparent border-b-transparent border-r-amber-400 border-l-rose-400'>
          <h1 className='text-center font-medium text-purple-600'>Tell us the differences between uncontrolled and controlled components.</h1>
          <p className='text-center font-mono'>
          Controlled components are like a well-behaved child who listens to their parents (React). They follow React's rules and their form elements are controlled by React state. They are easier to manage and more predictable than uncontrolled components.
          <br /> <br />
          Uncontrolled components are like a wild child who doesn't listen to their parents (React). They do whatever they want and are managed by the browser (DOM). They don't rely on React to display or update their values.
          </p>
        </div>
        <div className='bg-zinc-100 mx-5 hover:scale-110 hover:bg-amber-200 rounded-lg transform transition-transform duration-1000  border-4 border-t-transparent border-b-transparent border-r-amber-400 border-l-rose-400'>
          <h1 className='text-center font-medium text-purple-600'>How to validate React props using PropTypes ?</h1>
          <p className='text-center font-mono'>
          PropTypes is a JavaScript library that allows developers to specify the type of data expected in each prop passed to a React component. It verifies that the data is of the correct type and issues a warning in the browser console if the data type is incorrect. This ensures that the component is receiving the expected data, which can prevent errors and improve code quality. By validating props with PropTypes, developers can catch issues during development and avoid bugs in production.
          </p>
        </div>
        <div className='bg-zinc-100 mx-5 hover:scale-110 hover:bg-amber-200 rounded-lg transform transition-transform duration-1000  border-4 border-t-transparent border-b-transparent border-r-amber-400 border-l-rose-400'>
          <h1 className='text-center font-medium text-purple-600'>Difference between Node.js and Express.js .</h1>
          <p className='text-center font-mono'>
          Express.js is a lightweight web application framework that runs on top of Node.js. It simplifies the process of building web applications and APIs by providing a set of features, including routing, middleware, and templates. 
          <br /> <br />
          Node.js is a JavaScript runtime that enables developers to run JavaScript code on the server-side, outside of the browser. It provides an environment for building server-side applications with JavaScript.
          </p>
        </div>
        <div className='bg-zinc-100 mx-5 hover:scale-110 hover:bg-amber-200 rounded-lg transform transition-transform duration-1000  border-4 border-t-transparent border-b-transparent border-r-amber-400 border-l-rose-400'>
          <h1 className='text-center font-medium text-purple-600'>What is a custom hook, and why will you create a custom hook.</h1>
          <p className='text-center font-mono'>
          A custom hook is a function that can be reused in multiple components to handle specific logic. It helps to simplify code and reduce repetition. Custom hooks are useful for extracting common logic from components and making them more reusable. They can be used for various tasks, including handling forms, fetching data, and managing state.
          </p>
        </div>
      </div>
     </PDFExport>
    </div>
  );
};

export default Blog;