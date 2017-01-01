import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/CircularProgress';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin'

import Form from '../components/Form'
import { fetchAthleteData } from '../actions'

injectTapEventPlugin()

const styles = {
  appContainer: {
    height: '100%',
  },
  appContent: {
    minHeight: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  controls: {
    marginTop: '80px',
  },
  response: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '40px',
    width: '90%',
    maxWidth: '500px',
  },
  athleteText: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Poppins, sans-serif',
  },
  titleText: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'bold',
    color: 'inherit',
    fontSize: '50px',
    textShadow: '2px 2px rgb(89, 89, 89)',
    textDecoration: 'none',
  },
  footer: {
    marginBottom: '0px',
    height: '100px',
    backgroundColor: 'rgb(33, 33, 33)',
    textAlign: 'center',
  },
  footerText: {
    fontFamily: 'Poppins, sans-serif',
    color: 'rgba(255, 255, 255, 0.541176)',
    paddingTop: '20px',
  },
}

/**
 * The main container for the app
 */
class App extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    athleteData: PropTypes.shape({
      number: PropTypes.string,
    }),
  }

  getAthleteClicked = (e, number) => {
    e.preventDefault()

    const { dispatch } = this.props

    dispatch(fetchAthleteData(number))
  }

  render() {
    const { athleteData } = this.props

    let athlete

    // the text box that contains the contents of the recruit letter
    if (athleteData && athleteData.athlete) {
      athlete = (<div style={styles.athleteText}> {athleteData.athlete} </div>)
    }

    return (
      <div style={styles.appContainer}>
        <AppBar
          title={
            <a tabIndex={-1} href="" style={styles.titleText}>
              My Jersey Number
            </a>}
          showMenuIconButton={false}
        />
        <div style={styles.appContent}>
          <div style={styles.controls}>
            <Form onSubmit={this.getAthleteClicked} />
          </div>
          <div style={styles.response}>
            { athlete }
          </div>
        </div>
        <footer style={styles.footer}>
          <div style={styles.footerText}>
            Made by Danny Sullivan
          </div>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { athleteData } = state

  return {
    athleteData,
  }
}

export default connect(mapStateToProps)(App)
