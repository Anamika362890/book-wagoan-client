import React from 'react';
import qstn1 from '../../assest/blog1.jpg'
import qstn2 from '../../assest/qstn2.png'
import qstn3 from '../../assest/qstn3.png'
import qstn4 from '../../assest/qstn4.png'
import Blog from './Blog';

const Blogs = () => {
    const BlogsData = [
        {
            id: 1,
            question: 'What are the different ways to manage a state in a React application?',
            answer: 'The Four Kinds of React State to Manage Local state, Global state, Server state,URL state.Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.A common example of global state is authenticated user state.If a user is logged into our app, it is necessary to get and change their data throughout our application.Sometimes state we think should be local might become global. In server state Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.Fortunately there are tools such as SWR and React Query that make managing server state much easier. URL state,data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state.Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL ,There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.',
            img: qstn1

        },
        {
            id: 2,
            question: 'How does prototypical inheritance work?',
            answer: 'Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date.The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.',
            img: qstn2

        },
        {
            id: 3,

            question: 'What is a unit test? Why should we write unit tests?',
            answer: 'A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.',
            img: qstn3
        },
        {
            id: 4,
            question: 'Difference between React vs. Angular vs. Vue?',
            answer: 'Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.Popularity. According to a survey by Stack Overflow 40.13% of the developers believe that React is the most commonly used JavaScript Framework. Angular and Vue follow it with 22.96% and 18.97%, respectively.',
            img: qstn4
        },

    ]
    return (
        <div className='max-w-[1200px] mx-auto my-14'>
            <h1 className='text-4xl font-bold text-blue-900 text-center mb-14'>Welcome To Our Blog Page</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 mx-2 '>
                {
                    BlogsData.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                    >

                    </Blog>)
                }

            </div>
        </div>
    );
};

export default Blogs;