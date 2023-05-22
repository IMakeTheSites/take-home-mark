import { Request, Response } from "express";
import axios from "axios";
import { reverseWords } from "../utils";

export const get = async (req: Request, res: Response) => {
  const { countryCode } = req.params;

  try {
    const { data } = await axios.post(
      "https://countries.trevorblades.com/graphql",
      {
        query: `
        query GetCountryDetails($countryCode: ID!) {
          country(code: $countryCode) {
            name
            capital
            states {
              name
            }
          }
        }
      `,
        variables: {
          countryCode: countryCode.toUpperCase(),
        },
      }
    );

    const { name, capital, states } = data.data.country;
    const stateNames = await Promise.all(
      states.map(async (state: { name: string }) => {
        const reversedStateName = await reverseWords(state.name);
        return reversedStateName;
      })
    );

    res.json({
      name,
      capital,
      state_names: stateNames.join(", "),
    });
  } catch (error) {
    console.error("Error retrieving country details:", error);
    res.sendStatus(500);
  }
};
