import styled, {createGlobalStyle} from 'styled-components'

// Input Field is  a group component

export const _InputField = styled.div`
	margin-bottom: 15px;

	label {
		display: block;
		margin-bottom: 10px;
		font-size: 13px;
		font-weight: 600;
	}

	input {
		box-sizing: border-box;
		width: 100%;
		font-size: 14px;
		padding: 0.65em 1em;
		border: solid 1px #ddd;
		border-radius: 5px;
	}
`

// Seprator is a resusable solo decorative component

export const _Separator = styled.div`
	margin: 1em 0;
	height: 1px;
	background-color: #ddd;
`

// Task Editor is a one-time form component

export const _TaskEditor = styled.form`
	margin-top: 5px;
	display: grid;
	gap: 10px;

	input {
		border-radius: 5px;
		border: 1px solid #bbbbbb;
		outline: 0;
		padding: 10px 15px;
		width: 100%;

		:focus {
			border: solid 1px #808080;
		}
	}
`

// View

export const _View = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	max-width: 800px;
	padding: 10px 50px 100px;
`

// View Head is a one-time div component

export const _ViewHead = styled.div`
	align-items: baseline;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	margin-bottom: 30px;
	margin-top: 50px;

	span.title {
		font-size: 20px;
		font-weight: bold;
	}

	span.date {
		color: #808080;
		font-size: 12px;
		font-weight: normal;
		margin-left: 5px;
	}
`

// Task List is a one-time group component for displaying tasks
export const _TaskList = styled.div`
	li {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		padding: 8px 0;
		border-bottom: 1px solid #bbbbbb75;
		cursor: pointer;

		div {
			align-items: center;
			background-color: #fff;
			border-radius: 50%;
			border: 1px solid #808080;
			display: flex;
			flex-direction: row;
			justify-content: center;
			position: relative;
			transition: background-color 260ms;
			width: 20px;
			height: 20px;
			margin-right: 10px;
			margin-top: 0.2rem;
			padding: 9px;

			:hover {
				background-color: #bbbbbb80;
			}
		}

		main {
			word-break: break-all;
			word-wrap: break-word;
			line-height: 1.5rem;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
		}
	}
`

// Button is a reusable button component with children that inherit it's base

export const _Button = styled.button`
	background-color: transparent;
	border: 0;
	cursor: pointer;

	:disabled {
		opacity: 0.3;
		cursor: auto;
	}
`

export const __ButtonLogout = styled(_Button)`
	background-color: white;
	border-radius: 5px;
	color: var(--color-primary);
	font-weight: 500;
	padding: 8px 20px;
`

export const __ButtonPrimary = styled(_Button)`
	background-color: var(--color-primary);
	border-radius: 5px;
	color: white;
	font-weight: 500;
	padding: 8px 20px;
`

export const __ButtonCancel = styled(_Button)`
	color: #808080;
	:hover {
		text-decoration: underline;
	}
`

export const __ButtonPlusNew = styled(_Button)`
	align-items: center;
	color: #808080;
	display: flex;
	padding: 8px 0;
	width: 100%;
	:hover {
		color: var(--color-primary);
	}
	span {
		align-items: center;
		display: flex;
		height: 20px;
		justify-content: center;
		margin-right: 10px;
		width: 20px;
	}
`

// Error message is a reusable functional component

export const _ErrorMessage = styled.div`
	margin: ${({marginTRBL}) => marginTRBL || '0'};
	font-size: 14px;
	padding: 0.65em 1em;
	background-color: #ffeeee;
	border: solid 2px #e66a6a;
	border-radius: 5px;
	line-height: 1.4em;
`

// Onbaordin Section is a reusable layout component, need to break it down

export const _OnboardingSection = styled.section`
	display: flex;
	justify-content: center;

	> main {
		margin: 40px 0;
		border-radius: 8px;
		border: solid 1px #dbdbdb;
		background-color: white;
		padding: 25px;

		header {
			display: flex;
			justify-content: space-between;
			align-items: baseline;
			margin-bottom: 10px;

			img {
				height: 40px;
			}
		}

		form {
			width: 400px;

			button {
				background-color: var(--color-primary);
				border-radius: 5px;
				border: 0;
				box-sizing: border-box;
				color: white;
				cursor: pointer;
				font-size: 14px;
				font-weight: 500;
				padding: 1em 1em;
				width: 100%;
			}
		}

		footer {
			text-align: center;
			font-size: 14px;

			a {
				color: var(--color-primary);
				text-decoration: none;

				:hover {
					text-decoration: underline;
				}
			}
		}
	}
`

// Nav
export const _Nav = styled.div`
	background-color: var(--color-primary);

	main {
		padding: 10px 50px;
		max-width: 800px;
		display: flex;
		margin: auto;
		align-items: center;
		justify-content: space-between;
		color: white;
	}
`

// Global Styles
export const _GlobalStyle = createGlobalStyle`
	:root {
		--color-primary: rgb(58, 77, 158);
	}

	* {
		box-sizing: border-box;
		font-family: 'Inter', sans-serif;
	}


	ul {
		margin: 0;
		padding: 0;
	}

	/* Signup */

	html,
	body {
		background: #fafafa !important;
	}
`
