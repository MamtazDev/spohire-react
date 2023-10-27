import React from 'react'
import { Table } from 'react-bootstrap'
import './Players.css'
import playerImgOne from '../../../assets/playerImg.svg';
import startIcon from '../../../assets/starIcon.svg';
import messageIcon from '../../../assets/messageIcon.svg';

const Players = () => {
  return (
    <div className='players'>
      <Table responsive>

        <thead>
          <tr>
            {/* {Array.from({ length: 6 }).map((_, index) => ( */}
            <th className='fs_14 text_color_36 fw-normal'>
              <div className='d-flex align-items-center'>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>
                <p>
                  Name
                </p>
              </div>


            </th>

            <th className='fs_14 text_color_36 fw-normal'>
              Nation
            </th>

            <th className='fs_14 text_color_36 fw-normal'>
              Date of Birth
            </th>

            <th className='fs_14 text_color_36 fw-normal'>
              Position
            </th>

            <th className='fs_14 text_color_36 fw-normal'>
              Club
            </th>

            <th className='fs_14 text_color_36 fw-normal'>
              Status
            </th>

            <th className='fs_14 text_color_36 fw-normal'>
              Action
            </th>
            {/* ))} */}
          </tr>
        </thead>

        <tbody>

          {/* blank tr for taking space */}
          <tr>
            <td className='border-bottom-0'></td>
          </tr>

          <tr>

            <td className='border-bottom-0'>

              <div className="player_info d-flex align-items-center gap-2">

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>

                <div className="player_info_wrapper d-flex gap-2">
                  <div className="player_img">
                    <img src={playerImgOne} alt="player-img" />
                  </div>
                  <div className="player_name">
                    <p className='text_color_36 fw-medium fs_14'>
                      Jacob <br /> Bennett
                    </p>
                  </div>
                </div>

              </div>
            </td>


            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Italy
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                2002
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                PG
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Milano
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Gold
              </p>
            </td>

            <td className='border-bottom-0 d-flex align-items-center'>
              <p className='text_color_55 fw-normal fs_14'>
                <img src={startIcon} alt="star-icon" />
              </p>

              <p className='text_color_55 fw-normal fs_14'>
                <img src={messageIcon} alt="message-icon" />
              </p>
            </td>

          </tr>

          {/* blank tr for taking space */}
          <tr>
            <td className='border-bottom-0'></td>
          </tr>

          <tr>

            <td className='border-bottom-0'>

              <div className="player_info d-flex align-items-center gap-2">

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>

                <div className="player_info_wrapper d-flex gap-2">
                  <div className="player_img">
                    <img src={playerImgOne} alt="player-img" />
                  </div>
                  <div className="player_name">
                    <p className='text_color_36 fw-medium fs_14'>
                      Jacob <br /> Bennett
                    </p>
                  </div>
                </div>

              </div>
            </td>


            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Italy
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                2002
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                PG
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Milano
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Gold
              </p>
            </td>

            <td className='border-bottom-0 d-flex align-items-center'>
              <p className='text_color_55 fw-normal fs_14'>
                <img src={startIcon} alt="star-icon" />
              </p>

              <p className='text_color_55 fw-normal fs_14'>
                <img src={messageIcon} alt="message-icon" />
              </p>
            </td>

          </tr>


          {/* blank tr for taking space */}
          <tr>
            <td className='border-bottom-0'></td>
          </tr>

          <tr>

            <td className='border-bottom-0'>

              <div className="player_info d-flex align-items-center gap-2">

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>

                <div className="player_info_wrapper d-flex gap-2">
                  <div className="player_img">
                    <img src={playerImgOne} alt="player-img" />
                  </div>
                  <div className="player_name">
                    <p className='text_color_36 fw-medium fs_14'>
                      Jacob <br /> Bennett
                    </p>
                  </div>
                </div>

              </div>
            </td>


            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Italy
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                2002
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                PG
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Milano
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Gold
              </p>
            </td>

            <td className='border-bottom-0 d-flex align-items-center'>
              <p className='text_color_55 fw-normal fs_14'>
                <img src={startIcon} alt="star-icon" />
              </p>

              <p className='text_color_55 fw-normal fs_14'>
                <img src={messageIcon} alt="message-icon" />
              </p>
            </td>

          </tr>


          {/* blank tr for taking space */}
          <tr>
            <td className='border-bottom-0'></td>
          </tr>

          <tr>

            <td className='border-bottom-0'>

              <div className="player_info d-flex align-items-center gap-2">

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>

                <div className="player_info_wrapper d-flex gap-2">
                  <div className="player_img">
                    <img src={playerImgOne} alt="player-img" />
                  </div>
                  <div className="player_name">
                    <p className='text_color_36 fw-medium fs_14'>
                      Jacob <br /> Bennett
                    </p>
                  </div>
                </div>

              </div>
            </td>


            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Italy
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                2002
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                PG
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Milano
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Gold
              </p>
            </td>

            <td className='border-bottom-0 d-flex align-items-center'>
              <p className='text_color_55 fw-normal fs_14'>
                <img src={startIcon} alt="star-icon" />
              </p>

              <p className='text_color_55 fw-normal fs_14'>
                <img src={messageIcon} alt="message-icon" />
              </p>
            </td>

          </tr>



          {/* blank tr for taking space */}
          <tr>
            <td className='border-bottom-0'></td>
          </tr>

          <tr>

            <td className='border-bottom-0'>

              <div className="player_info d-flex align-items-center gap-2">

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>

                <div className="player_info_wrapper d-flex gap-2">
                  <div className="player_img">
                    <img src={playerImgOne} alt="player-img" />
                  </div>
                  <div className="player_name">
                    <p className='text_color_36 fw-medium fs_14'>
                      Jacob <br /> Bennett
                    </p>
                  </div>
                </div>

              </div>
            </td>


            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Italy
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                2002
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                PG
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Milano
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Gold
              </p>
            </td>

            <td className='border-bottom-0 d-flex align-items-center'>
              <p className='text_color_55 fw-normal fs_14'>
                <img src={startIcon} alt="star-icon" />
              </p>

              <p className='text_color_55 fw-normal fs_14'>
                <img src={messageIcon} alt="message-icon" />
              </p>
            </td>

          </tr>


          {/* blank tr for taking space */}
          <tr>
            <td className='border-bottom-0'></td>
          </tr>

          <tr>

            <td className='border-bottom-0'>

              <div className="player_info d-flex align-items-center gap-2">

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>

                <div className="player_info_wrapper d-flex gap-2">
                  <div className="player_img">
                    <img src={playerImgOne} alt="player-img" />
                  </div>
                  <div className="player_name">
                    <p className='text_color_36 fw-medium fs_14'>
                      Jacob <br /> Bennett
                    </p>
                  </div>
                </div>

              </div>
            </td>


            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Italy
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                2002
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                PG
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Milano
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Gold
              </p>
            </td>

            <td className='border-bottom-0 d-flex align-items-center'>
              <p className='text_color_55 fw-normal fs_14'>
                <img src={startIcon} alt="star-icon" />
              </p>

              <p className='text_color_55 fw-normal fs_14'>
                <img src={messageIcon} alt="message-icon" />
              </p>
            </td>

          </tr>


          {/* blank tr for taking space */}
          <tr>
            <td className='border-bottom-0'></td>
          </tr>

          <tr>

            <td className='border-bottom-0'>

              <div className="player_info d-flex align-items-center gap-2">

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>

                <div className="player_info_wrapper d-flex gap-2">
                  <div className="player_img">
                    <img src={playerImgOne} alt="player-img" />
                  </div>
                  <div className="player_name">
                    <p className='text_color_36 fw-medium fs_14'>
                      Jacob <br /> Bennett
                    </p>
                  </div>
                </div>

              </div>
            </td>


            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Italy
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                2002
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                PG
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Milano
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Gold
              </p>
            </td>

            <td className='border-bottom-0 d-flex align-items-center'>
              <p className='text_color_55 fw-normal fs_14'>
                <img src={startIcon} alt="star-icon" />
              </p>

              <p className='text_color_55 fw-normal fs_14'>
                <img src={messageIcon} alt="message-icon" />
              </p>
            </td>

          </tr>


          {/* blank tr for taking space */}
          <tr>
            <td className='border-bottom-0'></td>
          </tr>

          <tr>

            <td className='border-bottom-0'>

              <div className="player_info d-flex align-items-center gap-2">

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>

                <div className="player_info_wrapper d-flex gap-2">
                  <div className="player_img">
                    <img src={playerImgOne} alt="player-img" />
                  </div>
                  <div className="player_name">
                    <p className='text_color_36 fw-medium fs_14'>
                      Jacob <br /> Bennett
                    </p>
                  </div>
                </div>

              </div>
            </td>


            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Italy
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                2002
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                PG
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Milano
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Gold
              </p>
            </td>

            <td className='border-bottom-0 d-flex align-items-center'>
              <p className='text_color_55 fw-normal fs_14'>
                <img src={startIcon} alt="star-icon" />
              </p>

              <p className='text_color_55 fw-normal fs_14'>
                <img src={messageIcon} alt="message-icon" />
              </p>
            </td>

          </tr>

          {/* blank tr for taking space */}
          <tr>
            <td className='border-bottom-0'></td>
          </tr>

          <tr>

            <td className='border-bottom-0'>

              <div className="player_info d-flex align-items-center gap-2">

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>

                <div className="player_info_wrapper d-flex gap-2">
                  <div className="player_img">
                    <img src={playerImgOne} alt="player-img" />
                  </div>
                  <div className="player_name">
                    <p className='text_color_36 fw-medium fs_14'>
                      Jacob <br /> Bennett
                    </p>
                  </div>
                </div>

              </div>
            </td>


            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Italy
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                2002
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                PG
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Milano
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Gold
              </p>
            </td>

            <td className='border-bottom-0 d-flex align-items-center'>
              <p className='text_color_55 fw-normal fs_14'>
                <img src={startIcon} alt="star-icon" />
              </p>

              <p className='text_color_55 fw-normal fs_14'>
                <img src={messageIcon} alt="message-icon" />
              </p>
            </td>

          </tr>


          {/* blank tr for taking space */}
          <tr>
            <td className='border-bottom-0'></td>
          </tr>

          <tr>

            <td className='border-bottom-0'>

              <div className="player_info d-flex align-items-center gap-2">

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>

                <div className="player_info_wrapper d-flex gap-2">
                  <div className="player_img">
                    <img src={playerImgOne} alt="player-img" />
                  </div>
                  <div className="player_name">
                    <p className='text_color_36 fw-medium fs_14'>
                      Jacob <br /> Bennett
                    </p>
                  </div>
                </div>

              </div>
            </td>


            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Italy
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                2002
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                PG
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Milano
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Gold
              </p>
            </td>

            <td className='border-bottom-0 d-flex align-items-center'>
              <p className='text_color_55 fw-normal fs_14'>
                <img src={startIcon} alt="star-icon" />
              </p>

              <p className='text_color_55 fw-normal fs_14'>
                <img src={messageIcon} alt="message-icon" />
              </p>
            </td>

          </tr>


          {/* blank tr for taking space */}
          <tr>
            <td className='border-bottom-0'></td>
          </tr>

          <tr>

            <td className='border-bottom-0'>

              <div className="player_info d-flex align-items-center gap-2">

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>

                <div className="player_info_wrapper d-flex gap-2">
                  <div className="player_img">
                    <img src={playerImgOne} alt="player-img" />
                  </div>
                  <div className="player_name">
                    <p className='text_color_36 fw-medium fs_14'>
                      Jacob <br /> Bennett
                    </p>
                  </div>
                </div>

              </div>
            </td>


            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Italy
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                2002
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                PG
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Milano
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Gold
              </p>
            </td>

            <td className='border-bottom-0 d-flex align-items-center'>
              <p className='text_color_55 fw-normal fs_14'>
                <img src={startIcon} alt="star-icon" />
              </p>

              <p className='text_color_55 fw-normal fs_14'>
                <img src={messageIcon} alt="message-icon" />
              </p>
            </td>

          </tr>


          {/* blank tr for taking space */}
          <tr>
            <td className='border-bottom-0'></td>
          </tr>

          <tr>

            <td className='border-bottom-0'>

              <div className="player_info d-flex align-items-center gap-2">

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>

                <div className="player_info_wrapper d-flex gap-2">
                  <div className="player_img">
                    <img src={playerImgOne} alt="player-img" />
                  </div>
                  <div className="player_name">
                    <p className='text_color_36 fw-medium fs_14'>
                      Jacob <br /> Bennett
                    </p>
                  </div>
                </div>

              </div>
            </td>


            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Italy
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                2002
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                PG
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Milano
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Gold
              </p>
            </td>

            <td className='border-bottom-0 d-flex align-items-center'>
              <p className='text_color_55 fw-normal fs_14'>
                <img src={startIcon} alt="star-icon" />
              </p>

              <p className='text_color_55 fw-normal fs_14'>
                <img src={messageIcon} alt="message-icon" />
              </p>
            </td>

          </tr>


          {/* blank tr for taking space */}
          <tr>
            <td className='border-bottom-0'></td>
          </tr>

          <tr>

            <td className='border-bottom-0'>

              <div className="player_info d-flex align-items-center gap-2">

                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                </div>

                <div className="player_info_wrapper d-flex gap-2">
                  <div className="player_img">
                    <img src={playerImgOne} alt="player-img" />
                  </div>
                  <div className="player_name">
                    <p className='text_color_36 fw-medium fs_14'>
                      Jacob <br /> Bennett
                    </p>
                  </div>
                </div>

              </div>
            </td>


            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Italy
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                2002
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                PG
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Milano
              </p>
            </td>

            <td className='border-bottom-0'>
              <p className='text_color_55 fw-normal fs_14'>
                Gold
              </p>
            </td>

            <td className='border-bottom-0 d-flex align-items-center'>
              <p className='text_color_55 fw-normal fs_14'>
                <img src={startIcon} alt="star-icon" />
              </p>

              <p className='text_color_55 fw-normal fs_14'>
                <img src={messageIcon} alt="message-icon" />
              </p>
            </td>

          </tr>



        </tbody>
      </Table>
    </div>
  )
}

export default Players