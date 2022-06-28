import { useQuery } from "react-query";

type Props = {
  keyQuery: string;
  service: () => void;
  param?: string | number | object;
};

export const useCustomQuery = ({ keyQuery, service, param }: Props) => {
  const { isLoading, error, data } = useQuery(keyQuery, () => service());

  return {
    isLoading,
    error,
    data,
  };
};
