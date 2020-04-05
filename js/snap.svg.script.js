const rezX = window.innerWidth
const rezY = window.innerHeight
console.log(rezX, rezY)
var s = Snap(".svgbanner");

var poligon = s.select("#pyl")

poligon.attr({
  points: '120,0 '+rezX+',0 '+rezX+','+rezY+' 0,'+rezY+' 0,120'
})

var curl = s.select("#curlPyl")

var rect = s.select("#curlRect")

var image = s.select('#svgimg')

var img = new Image()
img.src = image.attr('xlink:href')
img.onload = function(){

  const peelImageX = rezX/2-this.width/2;
  const peelImageY = rezY/2-this.height/2;

  image.attr({
    x:peelImageX,
    y:peelImageY,
    width:this.width,
    height: this.height
  })

}
setTimeout(function(){
  poligon.animate({
      points: rezX+',0 '+rezX+',0 '+rezX+','+rezY+' 0,'+rezY+' 0,'+rezY,
    }, 2000,function(){
      poligon.animate({
        points:  rezX+','+rezY+' '+rezX+','+rezY+' '+rezX+','+rezY+' '+rezX+','+rezY+' '+rezX+','+rezY,
      },2000)}
  )
  rect.animate({
    width: '100%',
    height: '100vh'
  },1500)

  curl.animate({
      points:  rezX+',0 '+rezX+','+rezY+' 0,'+rezY
    },2000,function(){
      curl.animate({
        points: rezX+','+rezY+' '+rezX+','+rezY+' '+rezX+','+rezY,
      },2000, function () {
        s.remove()
      })}
  )
}, 3000)
