import { Gutter } from 'antd/es/grid/row'
import { CSSProperties } from 'react'

export const headerStyles: CSSProperties = {
  backgroundColor: 'white',
  padding: '0 24px',
  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',
  position: 'sticky',
  top: 0,
  zIndex: 1,
}

export const textStyles: CSSProperties = {
  cursor: 'pointer',
  fontWeight: 'bold',
}

export const contentStyles: CSSProperties = {
  padding: '0 24px',
  minHeight: 'calc(100vh - 128px)',
}

export const breadcrumbStyles: CSSProperties = {
  margin: '12px 0',
}

export const rowStyles: CSSProperties = {
  margin: '12px 0',
}

export const rowGutter: [Gutter, Gutter] = [
  { xs: 8, sm: 16, md: 24, lg: 32 },
  { xs: 8, sm: 16, md: 24, lg: 32 },
]

export const cardStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  border: '1px solid rgba(5, 5, 5, 0.10)',
  borderRadius: '8px',
}

export const chartWrapperStyles: CSSProperties = {
  padding: '20px',
}

export const chartBottomRowStyles: CSSProperties = {
  padding: '0 20px 8px',
}

export const titleStyles: CSSProperties = {
  margin: 0,
  padding: '12px 0 0 20px',
}

export const iconWrapperStyles: CSSProperties = {}

export const footerStyles: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '64px',
}

export const footerIconStyles: CSSProperties = {
  color: 'rgba(0, 0, 0, 0.25)',
  fontSize: '24px',
}
