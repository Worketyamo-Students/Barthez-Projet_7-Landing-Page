tailwind.config = {
    theme: {
        extend: {
            colors: {
                clifford: '#da373d',
                primaryColor: '#78350F',
                secondaryColor: '#0F172A',
                grayColor: '#E2E8F0',
            },

            backgroundImage: {
                'customGradient1': 'linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 89.63%)',
                'customImage1': "url('/Img/homeBG.png')",
            },
            
            boxShadow: {
                '3xl': '0px 0px 15px 0px #FFFFFF12,0px 25px 50px -12px #FFFFFF40',
                '2xl': '0px 0px 4px 0px #00000012,0px 4px 6px -1px #0000001A',
                'S6': '0px 0px 6px 0px #00000012,0px 10px 15px -3px #0000001A',
                'S7': '0px 0px 6px 0px #00000012, 0px 10px 15px -3px #0000001A',
                'S3': '0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A',

            },
            
            borderWidth: {
                '1.5': '1.5px',
            },

            borderRadius: {
                'xl': '20px',
                '4xl': '30px',
            },

            fontSize: {
                '3xl': '32px',
                '4.5xl': '40px',
                '5xl': '56px',
                '7xl': '65px',
            }
        }
    },

    plugins: [],
}