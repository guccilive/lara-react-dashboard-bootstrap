import React from 'react'

function NavNotice() {
  return (
      <li className='nav-items dropdown'>
          <a
              href="#"
              className='nav-link nav-icon'
              data-bs-toggle='dropdown'
          >
              <i className='bi bi-bell'></i>
              <span className='badge bg-primary badge-number'>4</span>
          </a>

          <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
              <li className='dropdown-header'>
                  You have 4 new notifications
                  <a
                      href="#">
                      <span className='badge rounded-pill bg-primary p-2 ms-2'>
                          View all
                      </span>
                  </a>
              </li>
              <li>
                 <hr className='dropdown-divider'/> 
              </li>
              <li className='notification-item'>
                  <i className='bi bi-exclamation-circle text-warning'></i>
                  <div>
                      <h4> Loren Ipsum</h4>
                      <p>Quaer norebel dela hermo cleas rium</p>
                      <p>30 min. ago</p>
                  </div>
              </li>
              <li>
                  <hr className='dropdown-divider'/>
              </li>
              <li className='notification-item'>
                  <i className='bi bi-exclamation-circle text-danger'></i>
                  <div>
                      <h4> Sit Colerm </h4>
                      <p>Darem clear morem slopem jecombe loben usem</p>
                      <p>10 min. ago</p>
                  </div>
              </li>
              <li>
                  <hr className='dropdown-divider'/>
              </li>
              <li className='notification-item'>
                  <i className='bi bi-exclamation-circle text-success'></i>
                  <div>
                      <h4> Gemn Sorem </h4>
                      <p>Jorem lirum soremn Peras del omeri solmna</p>
                      <p>1 hr. ago</p>
                  </div>
              </li>
              <li>
                  <hr className='dropdown-divider'/>
              </li>
              <li className='notification-item'>
                  <i className='bi bi-exclamation-circle text-primary'></i>
                  <div>
                      <h4> Versum Larum </h4>
                      <p>Gluman Sersus crustom moren dela gas</p>
                      <p>2 hrs. ago</p>
                  </div>
              </li>
              <li>
                  <hr className='dropdown-divider'/>
              </li>
              <li className='dropdown-footer'>
                  <a href="#"> Show all notifications</a>
              </li>
          </ul>
    </li>
  )
}

export default NavNotice