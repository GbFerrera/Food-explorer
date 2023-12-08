import styled from "styled-components";

export const Container = styled.div`
  button {
    background: none;
    color: ${({ theme }) => theme.COLORS.light_light_300};
  }

  label {
    color: ${({ theme }) => theme.COLORS.Light_Light_400};
  }

  input {
    background: ${({ theme }) => theme.COLORS.dark_dark_800};
    color: ${({ theme }) => theme.COLORS.Light_Light_100};
  }

  @media (max-width: 768px) {
    min-width: 375px;

    header {
      display: flex;
      gap: 60px;
      padding: 56px 28px 24px;

      img {
        width: 24px;
        height: 24px;
      }

      h1 {
        font-size: 21px;
      }

      p {
        font-size: 12px;
      }

      div {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }

    .new {
      padding: 10px 32px 24px;

      button {
        margin-bottom: 35px;
      }
    }

    form {
      display: grid;
      gap: 24px;
      padding: 0 32px 53px;

      label {
        display: block;
        margin-bottom: 16px;
      }

      input {
        color: ${({ theme }) => theme.COLORS.Light_Light_100};
        padding: 12px 16px;
        border-radius: 8px;
        width: 100%;
      }

      select {
        padding: 16px;
        color: ${({ theme }) => theme.COLORS.Light_Light_400};
        background: ${({ theme }) => theme.COLORS.dark_dark_900};
        border: none;
        border-radius: 8px;
        width: 100%;
      }

      #ingredients {
        display: flex;
        align-items: center;
        gap: 16px;
        background-color: ${({ theme }) => theme.COLORS.dark_dark_800};

        div {
          margin: 0;
          padding: 10px 16px;
        }

        input {
          background: none;
          padding: 0;
        }

        button {
          padding: 0;
        }

        img {
          width: 8px;
          height: 8px;
        }
      }

      textarea {
        width: 100%;
      }

      .btn {
        background-color: ${({ theme }) => theme.COLORS.Tints_Tomato_400};
      }
    }
  }

  @media (min-width: 769px) {
    width: 100%;

    margin: auto;

    section {
      display: flex;
      gap: 20px;
      margin-top: 32px;

      .flex {
        display: grid;
        gap: 16px;
      }
    }

    .new {
      padding: 46px 123px 0;

      button {
        margin-bottom: 24px;
      }
    }

    form {
      padding: 0 123px;

      input {
        padding: 12px 16px;
        border-radius: 8px;
      }

      #image {
        width: 230px;
      }
      #name {
        padding: 16px;
        width: 100%;
      }

      select {
        padding: 16px;
        color: ${({ theme }) => theme.COLORS.Light_Light_400};
        background: ${({ theme }) => theme.COLORS.dark_dark_900};
        border: none;
        border-radius: 8px;
        width: 295px;
      }

      #ingredients {
        width: 100%;
      }

      #price {
        width: 225px;
      }

      .flex {
        #ingredients {
          display: flex;
          gap: 16px;
          background: ${({ theme }) => theme.COLORS.dark_dark_800};
          padding: 4px 8px;
          border-radius: 8px;

          input {
            background: none;
          }

          button {
            font-size: 8px;
          }
        }
      }

      .lineTwo {
        margin-bottom: 32px;
      }

      textarea {
        margin: 16px 0 32px;
      }

      #btnSave {
        display: flex;
        justify-content: end;
      }

      .btn {
        background-color: ${({ theme }) => theme.COLORS.Tints_Tomato_400};
        width: 172px;

        font-size: 14px;
      }
    }

    footer {
      padding: 24px 123px;
    }
  }
`;
