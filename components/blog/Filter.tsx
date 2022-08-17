import {useState, useMemo, useCallback} from 'react'
import styled, {css} from 'styled-components'
import PopOver from 'react-popover'

const FilterIconWrapper = styled.div`
  margin: 2px 8px;
  float: right;
  clear: both;
`

const FilterIcon = styled.div`
  height: 40px;
  width: 40px;
  background: url(/icons/filter.jpg);
  background-size: contain;
  border: 2px solid black;
  border-radius: 4px;
  :hover{
    transform-y: -10px;
  }
` // Draw filter icon

const FilterOptionList = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  padding: 4px;
  border-radius: 8px;
`

const FilterOption = styled.div`
  border: 1px solid black;
  margin: 3px 5px;
  border-radius: 4px;
  text-align: center;
  padding: 0 8px;
  cursor: pointer;
  :hover{
    background: #f0f0f0;
  }

  ${props => {
    if(props.clear) {
      return (
        css`
            background: #bd2828;
            color: white;

            :hover{
              background: #961e1e;
            }
          `)
    }
    if(props.active) {
      return (
        css`
            background: #dedede;
            :hover{
              background: #cdcdcd;
            }
          `)
    }
  }
} 

`

type FilterProps = {
  initialFilter?: string | string[] | null;
  filters: string[];
  onFilterSelect?: (filter?: string) => void;
}

export function Filter(props: FilterProps) {
  const {
    filters, 
    onFilterSelect = () => null, 
    initialFilter = null
  } = props
  const [popoverOpen, setPopoverOpen] = useState<boolean>(false)
  const [activeFilter, setActiveFilter] = useState<string | string[] | null>(initialFilter)

  const setGlobalFilter = useCallback((f:string) => {
    setActiveFilter(f)
    onFilterSelect(f)
    setPopoverOpen(false)
  }, [onFilterSelect])

  const filterListMarkup = useMemo(() => (
    <FilterOptionList>
      {
        filters.map((f) => (
          <FilterOption key={`${Date.now()}-${f}`} active={f === activeFilter} onClick={() => setGlobalFilter(f)}>
            {f}
          </FilterOption>
        ))
      }
      {
        activeFilter !== null ?
          <FilterOption clear onClick={() => setGlobalFilter(null)}>Clear</FilterOption>
          : null
      }
    </FilterOptionList>
  ), [activeFilter, filters, setGlobalFilter])
  // TODO add custom bg/style for clear button

  const onFilterClick = useCallback((event) => {
    event?.stopPropagation()
    setPopoverOpen(!popoverOpen)
  }, [popoverOpen])

  const FilterSelectList = () => {
    return (
      <PopOver 
        isOpen={popoverOpen} 
        body={<>{filterListMarkup}</>}
        preferPlace="left"
        onOuterAction={() => setPopoverOpen(false)}
      >
        <FilterIconWrapper>
          <div onClick={onFilterClick}>
            <FilterIcon />
          </div>
        </FilterIconWrapper>
      </PopOver>
    )
  }

  return <FilterSelectList />
}
