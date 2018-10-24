var LeftArrow = function() {
  return {
    leftClick : function(boundthis, installing) {
      boundthis().state.photoArray.map((item, index)=>{
        let test = boundthis().state.photoArray.slice()
        if(item === boundthis().state.currentPhoto) {
          if ((index === 0) && (!boundthis().state.switch)){
            console.log('k1')
            boundthis().setState({backgroundPhoto:test[index+2], currentPhoto:test[index], switch:true, something: false, leftCounter: boundthis().leftCounter()})
          } else if ((index === 0) && (boundthis().state.backgroundPhoto !== installing)) {
              switch (boundthis().state.rightCounter) {
                case 0:
                    if (!boundthis().state.something) {
                      console.log('a1')
                      boundthis().setState({backgroundPhoto: test[index+1], currentPhoto:test[index+2], something: true, leftCounter:boundthis().leftCounter()})
                    } else if (boundthis().state.something){
                      console.log('a1')
                      boundthis().setState({backgroundPhoto: test[index+1], currentPhoto:test[index+2], something: false, leftCounter:boundthis().leftCounter()})
                    }
                    break
                case 1:
                case 2:
                    if (!boundthis().state.something) {
                      console.log('a1')
                      boundthis().setState({backgroundPhoto: test[index], currentPhoto:test[index+1], something: true, leftCounter:boundthis().leftCounter(), rightCounter:0})
                    } else if (boundthis().state.something){
                      console.log('a1')
                      boundthis().setState({backgroundPhoto: test[index], currentPhoto:test[index+1], something: false, leftCounter:boundthis().leftCounter(), rightCounter:0})
                    }
                    break
                default:
                    console.log(boundthis().state.rightCounter)
              }
          } else if (index === 2) {
              switch(boundthis().state.rightCounter) {
                case 0:
                    if(!boundthis().state.something) {
                      console.log('r1')
                      boundthis().setState({backgroundPhoto: test[index-2], currentPhoto:test[index-1], something: true, leftCounter: boundthis().leftCounter()})
                    } else if (boundthis().state.something) {
                      console.log('r1')
                      boundthis().setState({backgroundPhoto: test[index-2], currentPhoto:test[index-1], something: false, leftCounter: boundthis().leftCounter()})
                    }
                    break
                case 1:
                case 2:
                    if(!boundthis().state.something) {
                      console.log('r1')
                      boundthis().setState({backgroundPhoto: test[index], currentPhoto:test[index-2], something: true, leftCounter: boundthis().leftCounter(), rightCounter:0})
                    } else if (boundthis().state.something) {
                      console.log('r1')
                      boundthis().setState({backgroundPhoto: test[index], currentPhoto:test[index-2], something: false, leftCounter: boundthis().leftCounter(), rightCounter:0})
                    }
                    break
                default:
                    console.log(boundthis().state.rightCounter)
              }
           } else if (index === 1) {
              switch(boundthis().state.rightCounter) {
                case 0:
                    if(!boundthis().state.something) {
                      console.log('n1')
                      boundthis().setState({backgroundPhoto: test[index+1], currentPhoto:test[index-1], something: true, leftCounter:boundthis().leftCounter()})
                    } else if(boundthis().state.something) {
                      console.log('n1')
                      boundthis().setState({backgroundPhoto: test[index+1], currentPhoto:test[index-1], something: false, leftCounter:boundthis().leftCounter()})
                    }
                    break
                case 1:
                case 2:
                    if(!boundthis().state.something) {
                      console.log('n1')
                      boundthis().setState({backgroundPhoto: test[index], currentPhoto:test[index+1], something: true, leftCounter:boundthis().leftCounter(), rightCounter:0})
                    } else if(boundthis().state.something) {
                      console.log('n1')
                      boundthis().setState({backgroundPhoto: test[index], currentPhoto:test[index+1], something: false, leftCounter:boundthis().leftCounter(), rightCounter:0})
                    }
                    break
                default:
                    console.log(boundthis().state.rightCounter)
              }
          }
        }
        return null
      })
    }
  }
}

export default LeftArrow;
