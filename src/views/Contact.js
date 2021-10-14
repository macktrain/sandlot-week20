import React, { useState } from 'react'
import headshot from './images/headshot.gif'
import ReactDom from 'react-dom'


 class Contact extends React.Component {
   
    constructor (props) {
      super(props);

      this.state = { 
        message: '',
      }
    };

    render() {
          return (
            <div id='contactWrapper'>
              <div class="contact3 py-5">
                <div class="row no-gutters">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-6">
                        <div>
                          <img src={headshot} id='headshot' class="img-fluid"/>
                          <div class="card mt-4 border-0 mb-4">
                            <div class="row">
                              <span> Located in Colorado Springs, CO </span>
                              <span> Phone: (719) 619-7225&nbsp;&nbsp;&nbsp;&nbsp;Email: LeeMacklin@yahoo.com</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="contact-box ml-3">
                          <div>
                            <div id='warningMsg' className="text-center">
                              { this.state.message }
                            </div>
                          </div>
                          <form class="mt-4">
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="form-group mt-2">
                                  <input class="form-control" type="text" placeholder="name" ref={'nameEl'} onBlur={() => {
                                        if (ReactDom.findDOMNode(this.refs.nameEl).value.length === 0) {
                                          this.setState({ message: 'Name is a required field'})
                                        } else {
                                          this.setState({ message: ''})
                                        }
                                      }
                                    } />
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="form-group mt-2">
                                  <input class="form-control" type="email" placeholder="email address" ref={'emailEl'} onBlur={() => {
                                        if (ReactDom.findDOMNode(this.refs.emailEl).value.length === 0) {
                                          this.setState({ message: 'Email  is a required field'})
                                        } else {
                                            const emailRegex = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
                                            const val2check = ReactDom.findDOMNode(this.refs.emailEl).value.trim();
                                            if (!emailRegex.test(val2check)) {
                                              this.setState({ message: ''});
                                            }
                                            if (!emailRegex.test(val2check)) {
                                              alert ('You have entered an invalid email');
                                            }
                                        }
                                      }
                                    } />
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="form-group mt-2">
                                  <textarea class="form-control" rows="3" placeholder="message" ref={'msgEl'} onBlur={() => {
                                        if (ReactDom.findDOMNode(this.refs.msgEl).value.length === 0) {
                                          this.setState({ message: 'Message is a required field'})
                                        } else {
                                          this.setState({ message: ''})
                                        }
                                      }
                                    } ></textarea>
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <button type="submit" class="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                              </div>
                            </div>
                          </form>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ) 
    }
 }

 export default Contact
 
// const Contact = () => {
//     const [message, setMessage] = useState('');

//     return (
//             <div id='contactWrapper'>
//               <div class="contact3 py-5">
//                 <div class="row no-gutters">
//                   <div class="container">
//                     <div class="row">
//                       <div class="col-lg-6">
//                         <div class="card-shadow">
//                           <img src={headshot} id='headshot' class="img-fluid"/>
//                         </div>
//                       </div>
//                       <div class="col-lg-6">
//                         <div class="contact-box ml-3">
//                           <h1 class="font-weight-light mt-2">Quick Contact</h1>
//                           <div>
//                             <div className="h1 bg-secondary text-white text-center p-2">
//                               { message }
//                             </div>
//                           </div>
//                           <form class="mt-4">
//                             <div class="row">
//                               <div class="col-lg-12">
//                                 <div class="form-group mt-2">
//                                   <input class="form-control" type="text" placeholder="name" onBlur={() => setMessage ('Name is a required field') } />
//                                 </div>
//                               </div>
//                               <div class="col-lg-12">
//                                 <div class="form-group mt-2">
//                                   <input class="form-control" type="email" placeholder="email address" />
//                                 </div>
//                               </div>
//                               <div class="col-lg-12">
//                                 <div class="form-group mt-2">
//                                   <textarea class="form-control" rows="3" placeholder="message"></textarea>
//                                 </div>
//                               </div>
//                               <div class="col-lg-12">
//                                 <button type="submit" class="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
//                               </div>
//                             </div>
//                           </form>
//                         </div>
//                       </div>
//                       <div class="col-lg-12">
//                         <div class="card mt-4 border-0 mb-4">
//                           <div class="row">
//                             <div class="col-lg-4 col-md-4">
//                               <div class="card-body d-flex align-items-center c-detail pl-0">
//                                 <div class="mr-3 align-self-center">
//                                   <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"/>
//                                 </div>
//                                 <div class="">
//                                   <h6 class="font-weight-medium">Address</h6>
//                                   <p class="">Colorado Springs, CO</p>
//                                 </div>
//                               </div>
//                             </div>
//                             <div class="col-lg-4 col-md-4">
//                               <div class="card-body d-flex align-items-center c-detail">
//                                 <div class="mr-3 align-self-center">
//                                   <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"/>
//                                 </div>
//                                 <div class="">
//                                   <h6 class="font-weight-medium">Phone</h6>
//                                   <p class=""> . (719) 619-7225</p>
//                                 </div>
//                               </div>
//                             </div>
//                             <div class="col-lg-4 col-md-4">
//                               <div class="card-body d-flex align-items-center c-detail">
//                                 <div class="mr-3 align-self-center">
//                                   <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"/>
//                                 </div>
//                                 <div class="">
//                                   <h6 class="font-weight-medium">Email</h6>
//                                   <p class="">
//                                    . LeeMacklin@yahoo.com
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//     )
// }

// export default Contact
