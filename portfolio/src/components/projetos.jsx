import { Card, Col, List, Row, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import './style/cards.css';

const data = {
	RecipeApp: ['React', 'Context API', 'Hooks', 'CSS'],
	Trivia: ['React', 'Redux', 'CSS', 'Kanban'],
	ShoppingCart: ['JavaScript', 'Jest', 'DOM', 'CSS'],
	TrybeSmith: ['Typescript', 'CRUD', 'MySQL', 'Docker'],
	TrybersAndDragons: ['Typescript', 'POO', 'Docker'],
	TFC: ['Typescript', 'POO', 'Sequelize', 'Docker', 'TDD'],
	BlogsAPI: ['CRUD', 'Sequelize', 'Docker'],
};

export default function Projetos() {
	return (
		<Content>
			<Row
				style={{ marginTop: 80, marginBottom: 40 }}
				justify='space-evenly'
				id='section1'>
				<Col
					flex='auto'
					align='middle'
					style={{ position: 'relative' }}>
					<Typography.Title
						className='experiencia'
						level={3}
						style={{ color: '#484042', textAlign: 'center' }}>
						PROJETOS
					</Typography.Title>
				</Col>
			</Row>
			<Row
				flex='auto'
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
					gap: 40,
				}}>
				<Col>
					<Card
						title='App de Receitas'
						bordered={false}
						className='card'
						headStyle={{ borderBottom: '2px solid #fd92aecd' }}>
						<p style={{ fontSize: 15, marginBottom: '20px' }}>
							App de receitas que foi desenvolvido em grupo. O layout tem como
							foco dispositivos móveis e design responsivo.
						</p>
						<List
							header={<div style={{ height: 15 }}>Tecnologias</div>}
							footer={
								<div>
									<a href='https://github.com/MariSIN/recipe-app'>
										Link para o repositório
									</a>
								</div>
							}
							bordered
							dataSource={data.RecipeApp}
							renderItem={(item) => (
								<List.Item style={{ display: 'inline-block', height: 40 }}>
									{item}
								</List.Item>
							)}
						/>
					</Card>
				</Col>
				<Col>
					<Card
						title='Trivia'
						bordered={false}
						headStyle={{ borderBottom: '2px solid #fd92aecd' }}
						className='card'>
						<p style={{ fontSize: 15, marginBottom: '20px' }}>
							Jogo de perguntas e respostas baseado no jogo Trivia. Ele foi
							desenvolvido em grupo.
						</p>
						<List
							header={<div style={{ height: 15 }}>Tecnologias</div>}
							footer={
								<div>
									<a href='https://github.com/MariSIN/trivia'>
										Link para o repositório
									</a>
								</div>
							}
							bordered
							dataSource={data.Trivia}
							renderItem={(item) => (
								<List.Item style={{ display: 'inline-block', height: 40 }}>
									{item}
								</List.Item>
							)}
						/>
					</Card>
				</Col>
				<Col>
					<Card
						title='Shopping Cart'
						headStyle={{ borderBottom: '2px solid #fd92aecd' }}
						bordered={false}
						className='card'>
						<p style={{ fontSize: 15, marginBottom: '20px' }}>
							Carrinho de compras onde foram consumidos dados diretamente de uma
							API e o desenvolvimento foi orientado a testes (TDD).
						</p>
						<List
							header={<div style={{ height: 15 }}>Tecnologias</div>}
							footer={
								<div>
									<a href='https://github.com/MariSIN/shopping-cart'>
										Link para o repositório
									</a>
								</div>
							}
							bordered
							dataSource={data.ShoppingCart}
							renderItem={(item) => (
								<List.Item style={{ display: 'inline-block', height: 40 }}>
									{item}
								</List.Item>
							)}
						/>
					</Card>
				</Col>
				<Col>
					<Card
						title='Trybesmith'
						headStyle={{ borderBottom: '2px solid #fd92aecd' }}
						bordered={false}
						className='card'>
						<p style={{ fontSize: 15, marginBottom: '20px' }}>
							Loja online de itens medievais, utilizando Typescript, no formato
							de uma API.
						</p>
						<List
							header={<div style={{ height: 15 }}>Tecnologias</div>}
							footer={
								<div>
									<a href='https://github.com/MariSIN/Trybesmith'>
										Link para o repositório
									</a>
								</div>
							}
							bordered
							dataSource={data.TrybeSmith}
							className='list'
							renderItem={(item) => (
								<List.Item style={{ display: 'inline-block', height: 40 }}>
									{item}
								</List.Item>
							)}
						/>
					</Card>
				</Col>
				<Col>
					<Card
						title='Trybers and Dragons'
						headStyle={{ borderBottom: '2px solid #fd92aecd' }}
						bordered={false}
						className='card'>
						<p style={{ fontSize: 15, marginBottom: '20px' }}>
							Estrutura de jogos de interpretação de papéis, mais conhecidos
							como jogos RPG (Role Playing Game). Foi utilizado Typescript e os
							princípios de POO
						</p>
						<List
							header={<div style={{ height: 15 }}>Tecnologias</div>}
							footer={
								<div>
									<a href='https://github.com/MariSIN/Trybers-and-dragons'>
										Link para o repositório
									</a>
								</div>
							}
							bordered
							dataSource={data.TrybersAndDragons}
							className='list'
							renderItem={(item) => (
								<List.Item style={{ display: 'inline-block', height: 40 }}>
									{item}
								</List.Item>
							)}
						/>
					</Card>
				</Col>
				<Col>
					<Card
						title='Trybe Futebol Clube'
						headStyle={{ borderBottom: '2px solid #fd92aecd' }}
						bordered={false}
						className='card'>
						<p style={{ fontSize: 15, marginBottom: '20px' }}>
							O TFC é um site informativo sobre partidas e classificações de
							futebol.
						</p>
						<List
							header={<div style={{ height: 15 }}>Tecnologias</div>}
							footer={
								<div>
									<a href='https://github.com/MariSIN/trybe-futebol-clube-TFC'>
										Link para o repositório
									</a>
								</div>
							}
							bordered
							dataSource={data.TFC}
							className='list'
							renderItem={(item) => (
								<List.Item style={{ display: 'inline-block', height: 40 }}>
									{item}
								</List.Item>
							)}
						/>
					</Card>
				</Col>
				<Col>
					<Card
						title='Blogs API'
						headStyle={{ borderBottom: '2px solid #fd92aecd' }}
						bordered={false}
						className='card'>
						<p style={{ fontSize: 15, marginBottom: '20px' }}>
							API e um banco de dados para a produção de conteúdo de um blog.
						</p>
						<List
							header={<div style={{ height: 15 }}>Tecnologias</div>}
							footer={
								<div>
									<a href='https://github.com/MariSIN/blogs-API'>
										Link para o repositório
									</a>
								</div>
							}
							bordered
							dataSource={data.BlogsAPI}
							className='list'
							renderItem={(item) => (
								<List.Item style={{ display: 'inline-block', height: 40 }}>
									{item}
								</List.Item>
							)}
						/>
					</Card>
				</Col>
			</Row>
		</Content>
	);
}
