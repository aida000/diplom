import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add } from "../store/reducer"

const Universities = () => {
  const data = useSelector((st) => st)

  return (
    <div className="par">
      <h1 className="title">
        ՀՀ պետական բարձրագույն ուսումնական հաստատությունների ցանկ
      </h1>
      <img src="/image/university.jpg" className="stud"></img>

      <table style={{ width: "1000px" }}>
        <tbody>
          <tr>
            <td> </td>
            <td>
              <img
                alt=""
                src="http://escs.am/files/upload/32a6a69964bfbb4ac432b5d63af904da.jpg"
                style={{ float: "left", width: "50px", height: "50px" }}
              />
              <small>
                <strong>
                  <span>
                    «ԵՐԵՎԱՆԻ ՊԵՏԱԿԱՆ ՀԱՄԱԼՍԱՐԱՆ»<br></br>
                    ՀԻՄՆԱԴՐԱՄ
                  </span>
                  <br></br>
                  Ռեկտոր`{" "}
                </strong>
                Հ. Հովհաննիսյան<br></br>
                <strong>Հասցե`</strong>ք<strong>. </strong>Երևան, Ալեք Մանուկյան
                1<br></br>
                <strong>Հեռ.`</strong> 010-55-52-40 , 010- 55-46-41<br></br>
                <strong>Կայք` </strong>
                <a href="http://www.ysu.am/">www.ysu.am</a>
                <br></br>
                <strong>Էլփոստ`</strong>
                <a href="mailto:info@ysu.am">info@ysu.am</a>
              </small>
            </td>
            <td>
              <small>
                <img
                  alt=""
                  src="http://escs.am/files/upload/893714da5ff113541013f01fb41df88d.jpg"
                  style={{ float: "left", width: "50px", height: "50px" }}
                />
                <span>
                  <b>«ՀԱՅԱՍՏԱՆԻ ԱԶԳԱՅԻՆ ՊՈԼԻՏԵԽՆԻԿԱԿԱՆ ՀԱՄԱԼՍԱՐԱՆ» ՀԻՄՆԱԴՐԱՄ</b>
                </span>
                <br></br>
                <br></br>
                <strong>Ռեկտոր` </strong>Գ. Վարդանյան<br></br>
                <strong>Հասցե` </strong>ք<strong>. </strong>Երևան, Տերյան 105
                <br></br>
                <strong>Հեռ.`</strong> 010-52-46-29, 010-54-58-43<br></br>
                <strong>Կայք` </strong>
                <a href="http://www.seua.am/">https://polytech.am/</a>
                <br></br>
                <strong>Էլփոստ`</strong>{" "}
                <a href="mailto:rector@seua.am">info@polytechnic.am</a>
              </small>
            </td>
          </tr>

          <tr>
            <td> </td>
            <td>
              <small>
                <img
                  alt=""
                  src="http://escs.am/files/upload/27f43226a2db7598d905d71dad8ec5cb.jpg"
                  style={{ float: "left", width: "50px", height: "50px" }}
                />
                <span>«ՃԱՐՏԱՐԱՊԵՏՈՒԹՅԱՆ ԵՎ</span>
                <span>
                  {" "}
                  <strong>
                    ՇԻՆԱՐԱՐՈՒԹՅԱՆ ՀԱՅԱՍՏԱՆԻ ԱԶԳԱՅԻՆ ՀԱՄԱԼՍԱՐԱՆ» ՀԻՄՆԱԴՐԱՄ
                  </strong>
                </span>
                <br></br>
                <strong>Ռեկտոր` </strong>Ե. Վարդանյան<br></br>
                <strong>Հասցե` </strong>ք<strong>. </strong>Երևան, Տերյան 105
                <br></br>
                <strong>Հեռ.`</strong> 010-54-74-25, 010-58-72-84<br></br>
                <strong>Կայք` </strong>
                <a href="http://nuaca.am/">
                  <strong>http://nuaca.am/</strong>
                </a>
                <br></br>
                <strong>Էլփոստ` </strong>
                <a href="mailto:info@nuaca.am">info@nuaca.am</a>
              </small>
            </td>
            <td>
              <small>
                <img
                  alt=""
                  src="http://escs.am/files/upload/35d19cdb47ffeba13051919f5b979dcc.PNG"
                  style={{ float: "left", width: "50px", height: "50px" }}
                />
                <span> ՀԱՅԱՍՏԱՆԻ ՊԵՏԱԿԱՆ ՏՆՏԵՍԱԳԻՏԱԿԱՆ ՀԱՄԱԼՍԱՐԱՆ</span>
                <br></br>
                <strong>Ռեկտոր` </strong>Դ. Գալոյան<br></br>
                <strong>Հասցե` </strong>ք. Երևան, Նալբանդյան 128<br></br>
                <strong>Հեռ.`</strong> 010-52-17-20, 010-52-88-64<br></br>
                <strong>Կայք` </strong>
                <a href="http://www.asue.am/">www.ASUE.am</a>
                <br></br>
                <strong>Էլփոստ` </strong>
                <a href="mailto:rektor@asue.am">rektor@asue.am</a>
              </small>
            </td>
          </tr>
          <tr>
            <td> </td>
            <td>
              <small>
                <img
                  src="http://escs.am/files/upload/f0e281cfae9447dfb1846d55eedbb05e.jpg"
                  style={{ float: "left", width: "50px", height: "50px" }}
                />
                <span>
                  <b>«ԵՐԵՎԱՆԻ Մ</b>
                </span>
                .
                <strong>
                  ՀԵՐԱՑՈՒ ԱՆՎԱՆ ՊԵՏԱԿԱՆ ԲԺՇԿԱԿԱՆ ՀԱՄԱԼՍԱՐԱՆ» ՀԻՄՆԱԴՐԱՄ
                </strong>
              </small>

              <small>
                <strong>Ռեկտոր՝ Ա. Մուրադյան</strong>
                <br />
                <strong>Հասցե՝ </strong> ք. Երևան, Կորյունի 2<br />
                <strong>Հեռ.`</strong> 010-58-18-02, 010-58-25-32
                <br />
                <strong>
                  Կայք՝
                  <a href="http://www.ysmu.am">
                    <span>www.ysmu.am</span>{" "}
                  </a>
                </strong>
                <br />
                <strong>Էլփոստ՝</strong>{" "}
                <a href="mailto:info@ysmu.am">
                  <span>info@ysmu.am</span>
                </a>
              </small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default Universities
