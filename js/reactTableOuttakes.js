// For now, this remains as archival documentation
/*
// React classes to fetch and display existing records
// These are outtakes from spaUpload, based on the React tutorial components
var Record = React.createClass({
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: this.props.children };
  },
  render: function() {
  return (
    <div className="comment">
      <h5 className="commentAuthor">
        {this.props.title}
      </h5>
      <span dangerouslySetInnerHTML={this.rawMarkup()} />
    </div>
  );
}
});

let RecordManager = React.createClass({
  loadRecordsFromServer: function() {
      // IRONY: Using an AJAX call to get the GrqphQL data from server!
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        cache: false,
        success: function(data) {
          // console.log('Please print!! ' + JSON.stringify(data.data.imageRecs));
          this.setState({data: data.data.imageRecs});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadRecordsFromServer();
    // This polls the server; not quite sure why . . .
    // setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="recordBox">
        <h4>Demographics - Pulled from MongoDB via GraphQL</h4>
        <RecordList data={this.state.data} />
      </div>
    );
  }
});
;

// These are outtakes from spaBrowser, derived from "Thinking in React"
var RecordList = React.createClass({
  render: function() {
    var recordNodes = this.props.data.map(function(record) {
      return (
        <Record title={record.title} key={record._id}>
          {record.description}
        </Record>
      );
    });
    return (
      <div className="recordList">
        {recordNodes}
      </div>
    );
  }
});

// To display, include this code in the DOM render method below
<div>
<div id="data-display">
<RecordManager url="/oscon-test?query=query+{imageRecs{_id, title, description}}"
pollInterval={2000}
/>
</div>

// This component comes from "Thinking in React"
let FilterableInfoTable = React.createClass({
  render: function() {
    return (
      <div>
        <InfoTable
          url="/oscon-test?query=query+{imageRecs{_id, title, filename, description}}"
          />
      </div>
      );
    }
  });

/*
  // Original data from React demo site
  let testData = [
    {category: 'RPPC Postcards', circa: '1889', restricted: true, name: 'IroquoisBridge.tif'},
    {category: 'RPPC Postcards', circa: '1906', restricted: true, name: 'GangwerHotel.tif'},
    {category: 'RPPC Postcards', circa: '1914', restricted: false, name: 'HannaWest.png'},
    {category: 'Family Photos B/W', circa: '1936', restricted: true, name: 'JAWilliams2.tif'},
    {category: 'Family Photos B/W', circa: '1922', restricted: false, name: 'Dawson1922.png'},
    {category: 'Family Photos B/W', circa: '1950', restricted: true, name: 'PowlerReunion.tif'}
  ];

// Dummy array for temporary use
let RECORDS = [];


*/
