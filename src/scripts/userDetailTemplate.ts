export const userDetailTemplate = kendo.template(`
  <ul>
    <li>Address:
      <ul>
        <li>Street: #: kendo.htmlEncode(address.street) #</li>
        <li>Suite: #: kendo.htmlEncode(address.suite) #</li>
        <li>City: #: kendo.htmlEncode(address.city) #</li>
        <li>Zipcode: #: kendo.htmlEncode(address.zipcode) #</li>
      </ul>
    </li>
    <li>Company: 
      <ul>
        <li>Name: #: kendo.htmlEncode(company.name) #</li>
        <li>CatchPhrase: #: kendo.htmlEncode(company.catchPhrase) #</li>
        <li>Bs: #: kendo.htmlEncode(company.bs) #</li>
      </ul>
    </li>
  </ul>
`);
