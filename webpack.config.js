var path = require("path"); 
module.exports = {
	entry: './components/app.jsx', 
	output: {
		path: path.resolve(__dirname, "build"), 
		publicPath: "/", 
		filename: "bundle.js"
	}, 
	module: {
		loaders: [
			{
				test: /\.jsx?$/, 
				exclude: /(node_modeuls|bower_componenets)/, 
				loader: 'babel', 
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}, 
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}