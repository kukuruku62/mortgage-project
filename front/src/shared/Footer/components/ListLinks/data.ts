import { IListLinksProps } from "types/Footer";

export const contactsData: IListLinksProps = {
  title: "Contact us",
  items: [
    {
      id: "1",
      text: "82109 Bratislava, Mlynské nivy 14",
      link: "https://maps.app.goo.gl/QnSJPAPp4jy4Cvvd6"
    },
    {
      id: "2",
      text: "800-450-2010",
    },
    {
      id: "3",
      text: "customerservice@nafinc.com",
      link: "mailto:customerservice@nafinc.com",
    },
  ],
};

export const educationData: IListLinksProps = {
  title: "Education",
  items: [
    { id: "1", text: "Blog", link: "/" },
    { id: "2", text: "Ebook", link: "/" },
    { id: "3", text: "Webinar", link: "/" },
  ],
};

export const legalData: IListLinksProps = {
  title: "Legal",
  items: [
    { id: "1", text: "Terms of use", link: "/" },
    { id: "2", text: "Privacy policy", link: "/" },
  ],
};

export const textsData: IListLinksProps = {
  items: [
    {
      id: "1",
      text: "New American Funding makes Customer Service our number one priority. We encourage you to call our Corporate Customer Service department at 800-450-2010 ext. 7100 between 8 am and 5:00 pm Pacific or email us anytime at customerservice@nafinc.com for any complaint resolution you may have regarding the origination of your loan.",
    },
    {
      id: "2",
      text: "This site is not authorized by the New York State Department of Financial Services. No mortgage solicitation activity or loan applications for properties located in the State of New York can be facilitated through this site.\nRead more at https://www.newamericanfunding.com/#SsSswc4OzfksTC0E.99",
    },
  ],
};

export const copyrightText =
  "If you received a letter from New American Funding and would like to be removed from our mailing list, please call 800-450-2010. © 2018 Broker Solutions, Inc. DBA New American Funding. All Rights Reserved.";
