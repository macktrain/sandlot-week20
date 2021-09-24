import React from 'react'
import headshot from './images/headshot.gif'

const Contact = () => {
  
    return (
            <div id='contactWrapper'>
              <div class="contact3 py-5">
                <div class="row no-gutters">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card-shadow">
                          <img src={headshot} id='headshot' class="img-fluid"/>
                        </div>
                      </div>
                      <div class="col-lg-6">

                        <div id="my_div" height='60px' width='200px' background-color=''></div>

                        <div class="contact-box ml-3">
                          <form class="mt-4">
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="form-group mt-2">
                                  <input class="form-control" type="text" placeholder="name" />
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="form-group mt-2">
                                  <input class="form-control" type="email" placeholder="email address"/>
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="form-group mt-2">
                                  <textarea class="form-control" rows="3" placeholder="message"></textarea>
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <button type="submit" class="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="card mt-4 border-0 mb-4">
                          <div class="row">
                            <div class="col-lg-4 col-md-4">
                              <div class="card-body d-flex align-items-center c-detail pl-0">
                                <div class="mr-3 align-self-center">
                                  <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"/>
                                </div>
                                <div class="">
                                  <h6 class="font-weight-medium">Address</h6>
                                  <p class="">Colorado Springs, CO</p>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                              <div class="card-body d-flex align-items-center c-detail">
                                <div class="mr-3 align-self-center">
                                  <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"/>
                                </div>
                                <div class="">
                                  <h6 class="font-weight-medium">Phone</h6>
                                  <p class=""> . (719) 619-7225</p>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                              <div class="card-body d-flex align-items-center c-detail">
                                <div class="mr-3 align-self-center">
                                  <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"/>
                                </div>
                                <div class="">
                                  <h6 class="font-weight-medium">Email</h6>
                                  <p class="">
                                   . LeeMacklin@yahoo.com
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default Contact
