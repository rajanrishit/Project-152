<html>
    <head>
      <script src="​​https://aframe.io/releases/0.6.0/aframe.min.js"></script>
    </head>
</html>
AFRAMEregisterComponent("base",{
    schema:{
        radius:{type:"number",default:150},
        height:{type:"number",default:3}
    },

    init: function({
        this.el.setAttribute("geometry",{
             primitive:"cylinder"
             radius:this.data.radius,
             height:this.data.height
        })
    })
})