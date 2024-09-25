export const userDetailTemplate = kendo.template(`
  <div class="user-details">
  <ul>
    <li class="user-details-heading-1">Address
      <ul>
        <li> <span class="user-details-heading-2">Street:</span> #: kendo.htmlEncode(address.street) #</li>
        <li> <span class="user-details-heading-2">Suite:</span> #: kendo.htmlEncode(address.suite) #</li>
        <li> <span class="user-details-heading-2">City:</span> #: kendo.htmlEncode(address.city) #</li>
        <li> <span class="user-details-heading-2">Zipcode:</span> #: kendo.htmlEncode(address.zipcode) #</li>
      </ul>
    </li>
    <li class="user-details-heading-1">Company
      <ul>
        <li> <span class="user-details-heading-2">Name:</span> #: kendo.htmlEncode(company.name) #</li>
        <li> <span class="user-details-heading-2">Catch Phrase:</span> #: kendo.htmlEncode(company.catchPhrase) #</li>
        <li> <span class="user-details-heading-2">Business Description:</span> #: kendo.htmlEncode(company.bs) #</li>
      </ul>
    </li>
  </ul>
  <div id="map#:id#" class="map-container" style="width: 100%; height: 300px;">
  </div>
  </div>
`);
