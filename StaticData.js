export const STATIC_RESPONSES = {
  iAmOk: {
    name: "AKash",
    id: 89,
  },
  navItems: () => {
    var items = [
      { caption: "ID Proofs", link: "#", active: true, id: "idproofs" },
      { caption: "Financial", link: "#", id: "financial" },
      { caption: "Real Estate", link: "#", id: "realestate" },
      { caption: "Automobile", link: "#", id: "automobile" },
      { caption: "Utilities", link: "#", id: "utilities" },
      { caption: "Entertainment", link: "#", id: "entertainment" },
      { caption: "Trips", link: "#", id: "trips" },
      { caption: "Disabled", link: "#", disabled: true },
    ];

    return items;
  },
  detailInfo: ({ personId, infoType, infoId }) => {
    var info = [
      {
        person: {
          id: "PP",
          shortName: "Poulami",
          avtarSrc:
            "https://image.freepik.com/free-photo/waist-up-shot-attractive-young-girlfriend-with-dark-straight-hair-soft-healthy-skin_273609-18318.jpg",
        },
        info: {
          id: "pan",
          caption: "PAN Card",
          type: "idproof",
          details: [
            {
              id: "panno",
              caption: "PAN",
              datatype: "text",
              value: "ABCDE3421A",
            },
            {
              id: "dob",
              caption: "Date of Birth",
              datatype: "date",
              value: "2015-10-15",
            },
            {
              id: "panimage",
              caption: "Image",
              datatype: "image",
              value:
                "https://quikchex.in/wp-content/uploads/2019/03/aadhar-card-sample-picture.jpg",
            },
            {
              id: " download",
              caption: "Download Printable Version",
              datatype: "blob.download",
              value: {
                content: new Blob(["New Test File"], { type: "text/plain" }),
                fileName: "abcde.txt",
              },
            },
          ],
        },
      },
      {
        person: {
          id: "ADG",
          shortName: "Akashdeep",
          avtarSrc:
            "https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
        },
        info: {
          id: "adhaar",
          caption: "Adhaar Card",
          type: "idproof",
          details: [
            {
              id: "adhaarno",
              caption: "Adhaar No",
              datatype: "text",
              value: "ABCD-198762",
            },
            {
              id: "address",
              caption: "Address",
              datatype: "text",
              value: "Duily, Maur, 700019, West Bengal, India, KOlkata",
            },
            {
              id: "issued",
              caption: "Issued On",
              datatype: "date",
              value: "2021-01-15",
            },
          ],
        },
      },
    ];

    //console.log(personId, infoId, infoType);
    return info.filter((itm) => {
      //console.log(personId, infoId, infoType, itm);
      return (
        itm.person.id == personId &&
        itm.info.id == infoId &&
        (infoType ? itm.info.type == infoType : true)
      );
    });
  },
};
