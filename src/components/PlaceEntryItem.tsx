interface PlaceEntryProps {
  entryTitle: string;
  city: string;
  country: string;
  mapLink: string;
  entryBody: string;
  image: string;
}

function MakePlaceEntry({
  entryTitle,
  city,
  country,
  mapLink,
  entryBody,
  image,
}: PlaceEntryProps): JSX.Element {
  return (
    <>
      <section className="entry">
        <h2>
          <b>{entryTitle}</b>
        </h2>
        <div>
          <h3>
            <b>
              {city}, {country} (
              <a href={mapLink} target="_blank" rel="noopener noreferrer">
                map link
              </a>
              )
            </b>
          </h3>
          <img src={image} alt="place" width="80%" height="auto" />
        </div>
        <p className="entryBody">
          <big>{entryBody}</big>
        </p>
      </section>
      <footer>
        <p>🗺️ 🗺️ 🗺️ 🗺️</p>
      </footer>
    </>
  );
}

export default MakePlaceEntry;
