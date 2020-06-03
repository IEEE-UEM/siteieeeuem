import React,{ useContext, useState } from 'react'

import DimensionContext from '../../context/dimension'
import { Chapters } from '../../constants/constants'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import ArrowBottom from '../../assets/arrowBottom.svg'
import ArrowTop from '../../assets/arrowTop.svg'

import './Blog.css';

const backgroundColor = {
  IEEE: "#344EA9",
  CS: "#FFC34E",
  RAS: "#FF647C",
  PES: "#45EA36",
  BIOENG: "#2D3142"
}

function Blog() {
  const { width, height } = useContext(DimensionContext)

  const [expand, isExpand] = useState(false)

  const seilaExpansive = 4
  const seilaPerLine = 2

  const heightComponents = {
		page: () => {
			return expand 
				? height*(7/8) + Math.ceil((Chapters.length-seilaExpansive)/seilaPerLine)*height*(8/21) + height/14
				: height*(7/8) + height/14
		},

		bottomView: () => {
			return expand 
			? height*(6/8) + Math.ceil((Chapters.length-seilaExpansive)/seilaPerLine)*height*(8/21)
			: height*(6/8)
		}
	}

  return (
    <div className="Blog">
      <Header />

      <div className='pageItem' style={{ height: heightComponents.page(), width: width, marginTop: 20, marginBottom: 20, backgroundColor: backgroundColor['IEEE'] }}>
        <div className='itemTopView' style={{ height: height/10, width: width }}>
          <p className='itemTitle' style={{ fontSize: height/17, color: '#f1f4fd' }}>IEEE</p>
        </div>
        <div className='itemBottomView' style={{ height: heightComponents.bottomView(), width: width }}>
        { Chapters.map((element, index) => {
            if(!expand) {
              if(index < seilaExpansive) {
                  return (<React.Fragment key={index}>
                          <div className='smallCard' style={{ height: height/3.5, width: width/3, margin: height/21 }}>
                              <p className='smallCardText' style={{ fontSize: width/80, marginBottom: height/80 }}>{ element.title }</p>
                              <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <p>{element.description}</p>
                                <img className='itemImg' alt={element.title + 'logo'} src={ element.img } style={{ height: 50, width: 50 }}/>
                              </div>
                          </div>
                          { (index + 1) % seilaPerLine === 0 
                            ? (<div className='break'></div>)    
                            : (null)
                          }
                          </React.Fragment>)
              } else {
                  return (null)
              }
            } else {
              return (<React.Fragment key={index}>
                          <div className='smallCard' style={{ height: height/3.5, width: height/3.5, margin: height/21 }}>
                            <p className='smallCardText' style={{ fontSize: width/80, marginBottom: height/80 }}>{ element.title }</p>
                            <div>
                                <p>{element.description}</p>
                                <img className='itemImg' alt={element.title + 'logo'} src={ element.img }/>
                            </div>
                          </div>
                          { (index + 1) % seilaPerLine === 0 
                            ? (<div className='break'></div>)
                            : (null)
                          }
                      </React.Fragment>)
            }
        })}
        </div>
        <div className='buttonView'>
          <input
            type="image" 
            src={expand ? ArrowTop : ArrowBottom}
            alt='arrows'
            style={{ height: height/14, width: width/12, cursor: 'pointer' }}
            onClick={() => isExpand(!expand)}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog