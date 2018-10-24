var RightArrow = function() {
  return {
    rightClick : function(boundthis, installing) {
      boundthis().state.photoArray.map((item, index)=>{
        let test = boundthis().state.photoArray.slice()
        if(item === boundthis().state.currentPhoto) {
          if ((index === 0) && (boundthis().state.backgroundPhoto === installing) && (!boundthis().state.switch)){
            console.log('k1')
            boundthis().setState({backgroundPhoto:test[index+1], currentPhoto:test[index], switch:true, something: false, rightCounter: boundthis().rightCounter()})
          } else if ((index === 0) && (boundthis().state.backgroundPhoto !== installing)) {
              switch(boundthis().state.leftCounter) {
                case 0:
                    if (!boundthis().state.something) {
                      console.log('a1')
                      boundthis().setState({backgroundPhoto: test[index+2], currentPhoto:test[index+1], something: true, rightCounter: boundthis().rightCounter()})
                    } else if (boundthis().state.something){
                      console.log('a1')
                      boundthis().setState({backgroundPhoto: test[index+2], currentPhoto:test[index+1], something: false, rightCounter: boundthis().rightCounter()})
                    }
                    break
                case 1:
                case 2:
                    if (!boundthis().state.something) {
                      console.log('a1')
                      boundthis().setState({backgroundPhoto: test[index], currentPhoto:test[index+2], something: true, rightCounter: boundthis().rightCounter(), leftCounter:0})
                    } else if (boundthis().state.something){
                      console.log('a1')
                      boundthis().setState({backgroundPhoto: test[index], currentPhoto:test[index+2], something: false, rightCounter: boundthis().rightCounter(), leftCounter:0})
                    }
                    break
                default:
                    console.log(boundthis().state.leftCounter)
              }
          } else if (index === 1) {
            switch(boundthis().state.leftCounter) {
              case 0:
                  if(!boundthis().state.something) {
                    console.log('r1')
                    boundthis().setState({backgroundPhoto: test[index-1], currentPhoto:test[index+1], something: true, rightCounter: boundthis().rightCounter()})
                  } else if (boundthis().state.something) {
                    console.log('r1')
                    boundthis().setState({backgroundPhoto: test[index-1], currentPhoto:test[index+1], something: false, rightCounter: boundthis().rightCounter()})
                  }
                  break
              case 1:
              case 2:
                  if(!boundthis().state.something) {
                    console.log('r1')
                    boundthis().setState({backgroundPhoto: test[index], currentPhoto:test[index-1], something: true, rightCounter:boundthis().rightCounter(), leftCounter:0})
                  } else if (boundthis().state.something) {
                    console.log('r1')
                    boundthis().setState({backgroundPhoto: test[index], currentPhoto:test[index-1], something: false, rightCounter:boundthis().rightCounter(), leftCounter:0})
                  }
                  break
              default:
                  console.log(boundthis().state.leftCounter)
            }
          } else if ((index === 2) && (boundthis().state.leftCounter === 1)) {
            switch(boundthis().state.leftCounter) {
              case 0:
                  if(!boundthis().state.something) {
                    console.log('n1')
                    boundthis().setState({backgroundPhoto: test[index-1], currentPhoto:test[index-2], something: true, rightCounter:boundthis().rightCounter()})
                  } else if(boundthis().state.something) {
                    console.log('n1')
                    boundthis().setState({backgroundPhoto: test[index-1], currentPhoto:test[index-2], something: false, rightCounter:boundthis().rightCounter()})
                  }
                  break
              case 1:
                  if(!boundthis().state.something) {
                    console.log('n1')
                    boundthis().setState({backgroundPhoto: test[index-1], currentPhoto:test[index-2], something: true, rightCounter:boundthis().rightCounter(), leftCounter:0})
                  } else if(boundthis().state.something) {
                    console.log('n1')
                    boundthis().setState({backgroundPhoto: test[index-1], currentPhoto:test[index-2], something: false, rightCounter:boundthis().rightCounter(), leftCounter:0})
                  }
                  break
              case 2:
                  if(!boundthis().state.something) {
                    console.log('n1')
                    boundthis().setState({backgroundPhoto: test[index], currentPhoto:test[index-1], something: true, rightCounter:boundthis().rightCounter(), leftCounter:0})
                  } else if(boundthis().state.something) {
                    console.log('n1')
                    boundthis().setState({backgroundPhoto: test[index], currentPhoto:test[index-1], something: false, rightCounter:boundthis().rightCounter(), leftCounter:0})
                  }
                  break
              default:
                  console.log(boundthis().state.leftCounter)
            }
          }
        }
        return null
      })
    }
  }
}

export default RightArrow;
