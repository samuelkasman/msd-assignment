import NewCasesChart from '@/components/NewCasesChart'
import { Layout, Col, Row, Breadcrumb, Button, Space, Typography } from 'antd'
import {
  AlignLeftOutlined,
  DownloadOutlined,
  FilterOutlined,
} from '@ant-design/icons'
import { Content } from 'antd/es/layout/layout'
import {
  breadcrumbStyles,
  contentStyles,
  rowGutter,
  rowStyles,
} from '@/styles/styles'
import Card from '@/components/Card'
import Header from '@/components/Header'
import CumulativeCasesChart from '@/components/CumulativeCasesChart'

const Home = ({ eng, toDate }: FetchedData) => {
  const { Paragraph } = Typography

  return (
    <Layout>
      <Header />

      <Content style={contentStyles}>
        <Row justify="space-between" align="middle" style={rowStyles}>
          <Breadcrumb
            items={[{ title: 'COVID-19 cases', path: '/' }]}
            style={breadcrumbStyles}
          />

          <Space wrap>
            <Button>
              Export to PDF
              <DownloadOutlined />
            </Button>

            <Button>
              Notes (3)
              <AlignLeftOutlined />
            </Button>

            <Button>
              Filter
              <FilterOutlined />
            </Button>
          </Space>
        </Row>

        <Row gutter={rowGutter}>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Card title="New cases in England">
              {eng?.length ? (
                <NewCasesChart data={eng?.data} />
              ) : (
                <Paragraph type="danger">No data to display</Paragraph>
              )}
            </Card>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Card title="Cumulative cases in UK up to 01.08.2023">
              {toDate?.length ? (
                <CumulativeCasesChart data={toDate?.data} />
              ) : (
                <Paragraph type="danger">No data to display</Paragraph>
              )}
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}

export default Home
