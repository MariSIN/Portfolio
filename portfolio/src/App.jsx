import { ConfigProvider, Layout, Menu } from 'antd';
import SobreMim from './components/sobreMim';

const { Header, Content, Footer } = Layout;

const config = {
	colorPrimary: '#470a0a',
	colorTextBase: '#cdcfce',
	colorTextHeading: '#ecedf0',
	fontSizeHeading1: '70px',
	fontSizeHeading2: '40px',
	fontSizeHeading3: '100px',
	fontFamily: 'Raleway',
	fontSize: '20px',
	colorLink: '#55707b', 
	colorLinkHover: '#c3cad2'
};

function App() {
	return (
		<ConfigProvider
			theme={{
				token: { ...config,  },
			}}>
			<Layout>
				<Header
					style={{
						position: 'sticky',
						top: 0,
						zIndex: 1,
						width: '100%',
						background: '#050b17',
					}}>
					<div
						style={{
							float: 'left',
							width: 120,
							height: 31,
							margin: '16px 24px 16px 0',
							background: 'rgba(255, 255, 255, 0.2)',
						}}
					/>
					<Menu
						theme='dark'
						mode='horizontal'
						defaultSelectedKeys={['2']}
						style={{ background: '#050b17', color: '#f2f2f2' }}>
						<Menu.Item key='1'>Projetos</Menu.Item>
						<Menu.Item key='2'>Formação</Menu.Item>
						<Menu.Item key='3'>Contato</Menu.Item>
					</Menu>
				</Header>
				<Content
					className='site-layout'
					style={{
						width: '100%',
					}}>
					<div
						style={{
							minHeight: 380,
							background: '#272d39',
						}}>
						<SobreMim />
					</div>
				</Content>
				<Footer
					style={{
						textAlign: 'center',
						background: '#0A0A0A',
					}}>
					Ant Design ©2023 Created by Ant UED
				</Footer>
			</Layout>
		</ConfigProvider>
	);
}

export default App;
