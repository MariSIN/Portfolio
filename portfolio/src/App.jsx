import { ConfigProvider, Layout, Menu } from 'antd';
import SobreMim from './components/sobreMim';

const { Header, Content, Footer } = Layout;

const config = {
	colorPrimary: '#663DEA',
	colorBgBase: '#DBD9FC',
	colorTextBase: '#5B5169',
  colorTextHeading: '#8A38F5',
	fontSizeHeading1: '70px',
  fontSizeHeading2: '30px',
  fontSizeHeading3: '90px',
  fontFamily: 'Raleway',
  fontSize: '18px',
};

function App() {
	return (
		<ConfigProvider
			theme={{
				token: { ...config, colorLink: '#9254de', colorLinkHover: '#A494E9' },
			}}>
			<Layout>
				<Header
					style={{
						position: 'sticky',
						top: 0,
						zIndex: 1,
						width: '100%',
						background: '#947FEB',
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
						style={{ background: '#947FEB', color: '#391085' }}>
						<Menu.Item
							key='1'
						>
							Projetos
						</Menu.Item>
						<Menu.Item
							key='2'
						>
							Formação
						</Menu.Item>
						<Menu.Item
							key='3'
						>
							Contato
						</Menu.Item>
					</Menu>
				</Header>
				<Content
					className='site-layout'
					style={{
						padding: '50px',
						width: '100%',
					}}>
					<div
						style={{
							padding: 24,
							minHeight: 380,
							background: '#F2F2F8',
						}}>
						<SobreMim />
					</div>
				</Content>
				<Footer
					style={{
						textAlign: 'center',
						background: '#6D53EB',
					}}>
					Ant Design ©2023 Created by Ant UED
				</Footer>
			</Layout>
		</ConfigProvider>
	);
}

export default App;
