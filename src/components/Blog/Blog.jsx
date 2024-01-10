import React from 'react';

const Blog = () => {
    return (
<div>
            <h1 className='text-center block mx-auto text-3xl font-bold my-5 '>Question And Answer</h1>
            <div>
                <hr />
                <div className='text-left border-2 p-3 shadow-md rounded m-3 bg-sky-100'>
                    <h1 className='text-2xl font-semibold my-3'>When should you use context API?</h1>
                    <p className='font-semibold'>Use the Context API in React when you need to share data or state between multiple components that are not directly related through the component tree. It helps you avoid "prop drilling" and manage state across your application.</p>
                </div>
            </div>

            <div>
                <hr />
                <div className='text-left border-2 p-3 shadow-md rounded m-3 bg-sky-100'>
                    <h1 className='text-2xl font-semibold my-3'>What is a custom hook ?</h1>
                    <p className='font-semibold'>A custom hook is a reusable function in React that allows you to encapsulate and abstract away complex logic using React hooks. It centralizes logic in one place and makes it more reusable across multiple components.</p>
                </div>
            </div>

            <div>
                <hr />
                <div className='text-left border-2 p-3 shadow-md rounded m-3 bg-sky-100'>
                    <h1 className='text-2xl font-semibold my-3'>What is useRef ?</h1>
                    <p className='font-semibold'>useRef is a hook in React that allows you to create a reference to a DOM element or a value that persists between renders. It is used for accessing DOM elements or storing values that need to persist without triggering a re-render of the component.</p>
                </div>
            </div>

            <div>
                <hr />
                <div className='text-left border-2 p-3 shadow-md rounded m-3 bg-sky-100 '>
                    <h1 className='text-2xl font-semibold my-3'>What is useMemo?</h1>
                    <p className='font-semibold'>useMemo is a hook in React that memoizes the result of a function call and caches it so that it doesn't need to be re-computed every time a component re-renders. It's useful for optimizing performance by reducing unnecessary re-renders.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;