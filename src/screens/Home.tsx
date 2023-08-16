import NewCasesChart from '@/components/NewCasesChart'
import { Layout, Col, Row, Breadcrumb, Button, Space, Typography } from 'antd'
import {
  AlignLeftOutlined,
  DownloadOutlined,
  FilterOutlined,
  GithubOutlined,
  LinkedinOutlined,
  LoadingOutlined,
} from '@ant-design/icons'
import { Content, Footer } from 'antd/es/layout/layout'
import {
  breadcrumbStyles,
  contentStyles,
  footerIconStyles,
  footerStyles,
  rowGutter,
  rowStyles,
} from '@/styles/styles'
import Card from '@/components/Card'
import Header from '@/components/Header'
import CumulativeCasesChart from '@/components/CumulativeCasesChart'
import Link from 'next/link'
import { useHome } from './useHome'
import { trpc } from '@/utils/trpc'

const Home = () => {
  const { eng, engLoading, toDate, toDateLoading } = useHome()
  const { Paragraph } = Typography

  const utils = trpc.useContext()
  const chartsQuery = trpc.chart.list.useInfiniteQuery({ limit: 2 })

  const lineChartLike = chartsQuery?.data?.pages[0].items.find(
    (item) => item.id === 'line-chart'
  )?.isLiked
  const pieChartLike = chartsQuery?.data?.pages[0].items.find(
    (item) => item.id === 'pie-chart'
  )?.isLiked

  const updateChart = trpc.chart.update.useMutation({
    async onSuccess() {
      // refetches charts after update
      await utils.chart.list.invalidate()
    },
  })

  const updateChartLike = async (id: string, isLiked: boolean) => {
    await updateChart.mutateAsync({ id, isLiked })
  }

  const toggleLineChartLike = async () => {
    await updateChartLike('line-chart', !lineChartLike)
  }

  const togglePieChartLike = async () => {
    await updateChartLike('pie-chart', !pieChartLike)
  }

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
            <Card
              title="New cases in England"
              isLiked={lineChartLike}
              onLikeClick={toggleLineChartLike}
            >
              {engLoading ? (
                <Row justify="center" align="middle">
                  <LoadingOutlined />
                </Row>
              ) : eng?.length > 0 ? (
                <NewCasesChart data={eng} />
              ) : (
                <Paragraph type="danger">No data to display</Paragraph>
              )}
            </Card>
          </Col>

          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <Card
              title="Cumulative cases in UK up to 01.08.2023"
              isLiked={pieChartLike}
              onLikeClick={togglePieChartLike}
            >
              {toDateLoading ? (
                <Row justify="center" align="middle">
                  <LoadingOutlined />
                </Row>
              ) : toDate?.length > 0 ? (
                <CumulativeCasesChart data={toDate} />
              ) : (
                <Paragraph type="danger">No data to display</Paragraph>
              )}
            </Card>
          </Col>
        </Row>
      </Content>

      <Footer style={footerStyles}>
        <Space size="large">
          <Link href="https://github.com/samuelkasman/msd-assignment">
            <GithubOutlined style={footerIconStyles} />
          </Link>

          <Link href="https://www.linkedin.com/in/samuelkasman666/">
            <LinkedinOutlined style={footerIconStyles} />
          </Link>
        </Space>
      </Footer>
    </Layout>
  )
}

export default Home
