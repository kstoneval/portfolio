import React from "react";
import { Card, CardContent } from "@mui/material";
// import Masonry from "react-masonry-css";
import { ResponsiveMasonry } from "react-responsive-masonry";
// import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const Skills = () => {
  const breakpointColumnsObj = {
    default: 2,
    1150: 2,
    500: 1
  };
  
  const design = [{
      info: "AdobeXD"}];
  const dev = ["React", "Github", "Javascript", "HTML & CSS"];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.title}>
          Popular Specialties <span style={styles.titleGreen}></span>
        </span>
        <br />
        <span style={styles.subtitle}>
          Healthcare service providers within a variety of networks, including
          private health systems, VA, and MHS.
        </span>
      </div>

      <ResponsiveMasonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {design.map((item, index) => {
          return (
            <Card
              info={item.info}
              key={index}
            />
          );
        })}
      </ResponsiveMasonry>
    </div>
  );
};
export default Skills;
const styles = {
  container: {
    marginTop: 30,
    paddingBottom: 30,
    alignItems: "center",

  },
  header: {
    padding: 15
  },
  title: {
    fontSize: 30,
    alignItems: "center",
  },
  titleGreen: {
    color: "#179ad9",
    fontWeight: "600"
  },
  subtitleContainer: {
    marginTop: 20
  },
  subtitle: {
    fontSize: 15,
    color: "#4F4F4F"
  },
  servicesContainer: {
    display: "flex",
    flexDirection: "row"
  }
};
