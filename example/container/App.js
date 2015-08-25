import React, { Component, PropTypes } from 'react';
import Thumbnail from 'react-thumbnail';

const styles = {
  containerFlex: {
    display: 'flex',
    margin: '0 auto',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    fontFamily: 'sans-serif',
  },
  itemFlex: {
    background: 'lightgray',
    padding: 5,
    margin: 5,
  },
  itemThumbnail: {
    margin: '0 auto',
    border: '1px solid black'
  }
};

export default class App extends Component {
  static propTypes = {
    isTemplate: PropTypes.bool
  }

  static defaultProps = {
    isTemplate: false
  }
  render() {
    return (
      <div style={ styles.containerFlex } >
        <div style={ styles.itemFlex }>
          <header>Example using <code>scale</code></header>
          <Thumbnail style={ styles.itemThumbnail } width={250} height={250} page="https://facebook.github.io/react/docs/getting-started.html" scale={4} />

<code><pre>{`<Thumbnail width={250}
           height={250}
           page="https://facebook.github.io/react/docs/getting-started.html"
           scale={4}
/>`}</pre></code>
        </div>
        <div style={ styles.itemFlex }>
          <header>Example using <code>page[Width|Height]</code></header>
          <Thumbnail style={ styles.itemThumbnail } width={250}
                     height={250}
                     page="https://facebook.github.io/react/docs/getting-started.html"
                     pageWidth={1024}
                     pageHeight={768}
          />
<code><pre>{`<Thumbnail width={250}
           height={250}
           page="https://facebook.github.io/react/docs/getting-started.html"
           pageWidth={1024}
           pageHeight={768}
/>`}</pre></code>
        </div>
        <div style={ styles.itemFlex }>
          <header>Example using <code>keepAspectRatio="width"</code></header>
          <Thumbnail style={ styles.itemThumbnail }
                     width={250}
                     height={250}
                     page="https://facebook.github.io/react/docs/getting-started.html"
                     keepAspectRatio="width"
                     pageWidth={1024}
                     pageHeight={768}
          />
<code><pre>{`<Thumbnail width={250}
           height={250}
           page="https://facebook.github.io/react/docs/getting-started.html"
           keepAspectRatio="width"
           pageWidth={1024}
           pageHeight={768}
/>`}</pre></code>
        </div>
        <div style={ styles.itemFlex }>
          <header>Example using <code>keepAspectRatio="height"</code></header>
          <Thumbnail style={ styles.itemThumbnail }
                     width={250}
                     height={250}
                     page="https://facebook.github.io/react/docs/getting-started.html"
                     keepAspectRatio="height"
                     pageWidth={1024}
                     pageHeight={768}
          />
<code><pre>{`<Thumbnail width={250}
           height={250}
           page="https://facebook.github.io/react/docs/getting-started.html"
           keepAspectRatio="height"
           pageWidth={1024}
           pageHeight={768}
/>`}</pre></code>
        </div>
        <div style={ styles.itemFlex }>
          <header>Example using <code>interactive</code></header>
          <Thumbnail style={ styles.itemThumbnail }
                     interactive
                     width={250}
                     height={250}
                     page="https://facebook.github.io/react/docs/getting-started.html"
                     scale={3}
           />
<code><pre>{`<Thumbnail interactive
           width={250}
           height={250}
           page="https://facebook.github.io/react/docs/getting-started.html"
           keepAspectRatio="width"
           pageWidth={1024}
           pageHeight={768}
 />`}</pre></code>
        </div>
        { !this.props.isTemplate &&
          <div style={ {...styles.itemFlex, ...{background:'lightblue'}} }>
            <header>Example rendering <code>this.props.children</code></header>
            <Thumbnail style={ styles.itemThumbnail } width={250} height={250} scale={4}>
              <App isTemplate={true} />
            </Thumbnail>
<code><pre>{`<Thumbnail width={250} height={250} scale={4}>
  <App isTemplate={true} />
</Thumbnail`}</pre></code>
          </div>
        }
      </div>
    );
  }
}
