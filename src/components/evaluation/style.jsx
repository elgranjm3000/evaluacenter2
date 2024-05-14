import {
  grayBg,
  center,
  almostWhite,
  evaluacenterTextColor,
  evaluacenterFontBold,
  evaluacenterFontRegular,
  borderC,
  lightGray
} from '../globalStylesNew'

const btnBgColor = '#1ab394'

const styles = {
  container: {
    backgroundColor: grayBg,
    flex: 1,
  },
  wrapperheader: {
    backgroundColor: almostWhite,
  },
  ibox: {
    backgroundColor: almostWhite,
    margin: 20,
    zIndex: -1,
  },
  iboxTitle: {
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderColor: borderC,
    borderTopWidth: 3,
    fontSize: 14,
  },
  iboxTitleText: {
    fontSize: 14,
    fontWeight: '600',
    color: evaluacenterTextColor,
    fontFamily: evaluacenterFontBold,
  },
  iboxContent: {
    paddingTop: 15,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: borderC,
    borderTopWidth: 1,
  },
  thead: {
    flexDirection: 'row',
  },
  theadEvaluation: {
    flexDirection: 'row',
    backgroundColor: lightGray,
  },
  column1: {
    flex: 1,
    padding: 8,
  },
  column2: {
    flex: 2,
    padding: 8,
  },
  tbody: {
    flex: 1,
  },
  columnList1: {
    flex: 1,
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: borderC,
  },
  columnList2: {
    flex: 2,
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: borderC,
  },
  type: {
    fontSize: 13,
    color: evaluacenterTextColor,
    fontFamily: evaluacenterFontRegular,
  },
  btnEvaluation: {
    alignItems: center,
    backgroundColor: btnBgColor,
    paddingHorizontal: 6,
    paddingVertical: 12,
    borderRadius: 3,
  },
  textBtn: {
    color: almostWhite,
    fontSize: 14,
  },
};

export default styles
