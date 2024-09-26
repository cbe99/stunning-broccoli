import React, {useState, createContext} from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Switch, FormControlLabel, FormGroup} from '@mui/material';

const ThemeContext = createContext();

const ThemeSwitch = ({children}) => {
	const [darkMode, setDarkMode] = useState(false);

	const theme = createTheme({
		palette: {
			mode: darkMode ? 'dark' : 'light',
		},
	});

	return (
		<ThemeContext.Provider value={{darkMode, setDarkMode}}>
			<ThemeProvider theme={theme}>
				{children}
				<FormGroup>
					<FormControlLabel
						control={
							<Switch
								checked={darkMode}
								onChange={() => setDarkMode(!darkMode)}
							/>
						}
						label="Dark mode"
					/>
				</FormGroup>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

export default ThemeSwitch;
