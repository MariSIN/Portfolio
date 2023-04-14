import { Card, Col, List, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import './cards.css';

const data = {
	RecipeApp: ['React', 'Context API', 'Hooks', 'CSS'],
	Trivia: ['React', 'Redux', 'CSS', 'Kanban'],
	ShoppingCart: ['JavaScript', 'Jest', 'DOM', 'CSS'],
	TrybeSmith: ['Typescript', 'CRUD', 'MySQL', 'Docker'],
	TrybersAndDragons: ['Typescript', 'POO', 'Docker'],
	TFC: ['Typescript', 'POO', 'Sequelize', 'Docker', 'TDD'],
	BlogsAPI: ['CRUD', 'Sequelize', 'Docker'],
};

export default function cards() {
	return (
		<Content>
			<Row
				flex='auto'
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
				}}>
				<Col>
					<Card
						title='App de Receitas'
						bordered={false}
						className='card'>
						<p style={{ fontSize: 15, marginBottom: '20px' }}>
							Este projeto é um app de receitas que foi desenvolvido em grupo. O
							layout tem como foco dispositivos móveis, mas tem design
							responsivo para telas maiores também.
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
						className='card'>
						<p style={{ fontSize: 15, marginBottom: '20px' }}>
							Este projeto é um jogo de perguntas e respostas baseado no jogo
							Trivia. Ele foi desenvolvido em grupo.
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
						bordered={false}
						className='card'>
						<p style={{ fontSize: 15, marginBottom: '20px' }}>
							Neste projeto foi desenvolvido um carrinho de compras onde foram
							consumidos dados diretamente de uma API e o desenvolvimento foi
							orientado a testes (TDD).
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
						bordered={false}
						className='card'>
						<p style={{ fontSize: 15, marginBottom: '20px' }}>
							Este é um projeto de loja online de itens medievais, utilizando
							Typescript, no formato de uma API.
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
						bordered={false}
						className='card'>
						<p style={{ fontSize: 15, marginBottom: '20px' }}>
							Foi utilizado Typescript e os princípios de POO em uma estrutura
							de jogos de interpretação de papéis, mais conhecidos como jogos
							RPG (Role Playing Game).
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
						title='Trybers and Dragons'
						bordered={false}
						className='card'>
						<p style={{ fontSize: 15, marginBottom: '20px' }}>
							O projeto consistiu em desenvolver um back-end dockerizado
							utilizando a modelagem de dados com Sequelize.
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
						bordered={false}
						className='card'>
						<p style={{ fontSize: 15, marginBottom: '20px' }}>
							No projeto, foi desenvolvida uma API e um banco de dados para a
							produção de conteúdo de um blog.
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
