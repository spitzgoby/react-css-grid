export const breakpoints = [{
    size: 'xs',
    maxWidth: '599px',
}, {
    size: 'sm',
    maxWidth: '899px',
    minWidth: '600px'
}, {
    size: 'md',
    maxWidth: '1199px',
    minWidth: '900px'
}, {
    size: 'lg',
    maxWidth: '1535px',
    minWidth: '1200px'
}, {
    size: 'xl',
    minWidth: '1536px'
}];
const DEFAULT_GAP = '1em';
const DEFAULT_NUM_COLS = 12;

const getGap = ({ gap }) =>
    (gap || gap === 0)
        ? (!isNaN(gap) && !isNaN(parseFloat(gap)))
            ? gap + 'em' : gap
        : DEFAULT_GAP;

const getDisplay = (props, size) =>
    props.hidden?.[size]
        ? 'none'
        : props.container ? 'grid': 'block';

const areValidColumns = (colWidth, colOffset) => {
    const parsedWidth = parseInt(colWidth, 10);
    const parsedOffset = parseInt(colOffset, 10);

    return !isNaN(parsedWidth) &&
    !isNaN(parsedOffset) &&
    parsedWidth > 0 && 
    parsedWidth + parsedOffset <= DEFAULT_NUM_COLS;
}

const getGridColumn = ({ width, offset }, size) => areValidColumns(width[size], offset[size]) 
    ? `${parseInt(offset[size], 10) + 1} / span ${parseInt(width[size], 10)}`
    : undefined

const createScreenMediaQuery = (breakpoint) => 
    '@media screen' +
        `${breakpoint.minWidth ? ` and (min-width: ${breakpoint.minWidth})` : ''}` +
        `${breakpoint.maxWidth ? ` and (max-width: ${breakpoint.maxWidth})` : ''}`

export default breakpoints.reduce((styles, breakpoint) => ({
    ...styles,
    [createScreenMediaQuery(breakpoint)]: {
        container: {
            gap: props => getGap(props)
        },
        grid: { 
            display: props => getDisplay(props, breakpoint.size)
        },
        item: {
            gridColumn: props => getGridColumn(props, breakpoint.size)
        }
    }
}), {
    container: {
        gap: props => getGap(props)
    },
    grid: {
        display: props => getDisplay(props, 'xl')
    },
    item: {
        gridColumn: props => getGridColumn(props, 'xs')
    }
});