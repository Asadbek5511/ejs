import { fileURLToPath } from "node:url"
import * as path from "node:path"
import express from "express"
import ejs from "ejs"

const PORT = parseInt( process.env.PORT || 2_000 )
const __filename = fileURLToPath( import.meta.url )
const __dirname = path.dirname( __filename )
const images = [
	{
		imgURL: "/images/pic03.jpg",
	},
	{
		imgURL: "/images/pic02.jpg",
	},
	{
		imgURL: "/images/pic03.jpg",
	},
	{
		imgURL: "/images/pic02.jpg",
	},
	{
		imgURL: "/images/pic03.jpg",
	},
	{
		imgURL: "/images/pic02.jpg",
	},
	{
		imgURL: "/images/pic03.jpg",
	},
	
	{
		imgURL: "/images/pic02.jpg",
	},
	{
		imgURL: "/images/pic03.jpg",
	}
]
const table = [
  {
    name: "Item1",
    description: "Ante turpis integer aliquet porttitor.",
    price: 29.99
  },
  {
    name: "Item2",
    description: "Vis ac commodo adipiscing arcu aliquet.",
    price: 19.99
  },
  {
    name: "Item3",
    description: "Morbi faucibus arcu accumsan lorem.",
    price: 29.99
  },
  {
    name: "Item4",
    description: "Vitae integer tempus condimentum.",
    price: 19.99
  },
  {
    name: "Item5",
    description: "Ante turpis integer aliquet porttitor.",
    price: 29.99
  }
];
let sum=0
table.forEach(e=>{
	sum+=e.price
});
//

const app = express()

app.use( express.static( path.join( __dirname, "..", "public" ) ) )

app.engine( "html", ejs.renderFile )
app.set( "view engine", "html" )

app.set( "views", path.join( __dirname, "views" ) )

app.get( "/", ( _, res ) => res.render( "index"  ) )
app.get( "/elements", ( _, res ) => res.render( "elements",{images,table,sum}  ) )
app.get( "/generic", ( _, res ) => res.render( "generic"  ) )
app.get( "/index", ( _, res ) => res.render( "index"  ) )




//

app.listen( PORT, () => {

	console.info( `Server ready at: ${ PORT }` )
} )
