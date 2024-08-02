import {
  Button,
  Input,
  Label,
  ReloadIcon,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from '@/components';
import { JobOfferAnalyzer } from '@/interfaces';
import { useCallback, useState } from 'react';
import { ErrorAlertMsg } from './inputs/error-alert-msg';

interface InputValidation {
  msg: string;
  isIvalid: boolean;
  pattern: RegExp;
}

interface ValidationInput {
  title: InputValidation[];
  summary: InputValidation[];
  description: InputValidation[];
}

const inputValidations: ValidationInput = {
  title: [
    {
      msg: 'El título del puesto es requerido',
      isIvalid: false,
      pattern: /.+/,
    },
    {
      msg: 'Minimo 2 caracteres',
      isIvalid: false,
      pattern: /.{2,}/,
    },
  ],
  summary: [
    {
      msg: 'El resumen del puesto es requerido',
      isIvalid: false,
      pattern: /.+/,
    },
    {
      msg: 'Minimo 5 caracteres',
      isIvalid: false,
      pattern: /.{5,}/,
    },
  ],
  description: [
    {
      msg: 'La descripción del puesto es requerida',
      isIvalid: false,
      pattern: /.+/,
    },
    {
      msg: 'Minimo 5 caracteres',
      isIvalid: false,
      pattern: /.{5,}/,
    },
  ],
};

const initialValues = {
  title: '',
  type: '',
  salary: '',
  company: '',
  summary: '',
  description: '',
};

const InputError = ({
  msg,
  showError,
}: {
  msg: string;
  showError: boolean;
}) => {
  if (!showError) return null;
  return <ErrorAlertMsg msg={msg} />;
};

export const FillJobDetailsForm = ({
  isLoading,
  onSubmit,
  onHandleStepNext,
  onBackToSearchJob,
}: {
  isLoading: boolean;
  onSubmit: (jobOffer: JobOfferAnalyzer) => void;
  onHandleStepNext: () => void;
  onBackToSearchJob: () => void;
}) => {
  const [formData, setFormData] = useState(initialValues);
  const [inputError, setInputError] =
    useState<ValidationInput>(inputValidations);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setInputError((prev) => ({
        ...prev,
        [name]: inputValidations[name as keyof ValidationInput]?.map(
          (inputValidation) => ({
            ...inputValidation,
            isIvalid: !inputValidation.pattern.test(value),
          })
        ),
      }));

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const validateForm = useCallback(() => {
    const validationInput = Object.keys(inputValidations) as Array<
      keyof typeof inputValidations
    >;

    return (
      validationInput.every((key) =>
        inputValidations[key].every((validation) => !validation.isIvalid)
      ) &&
      formData.title &&
      formData.summary &&
      formData.description
    );
  }, [formData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const jobOffer: JobOfferAnalyzer = {
      title: formData.title,
      summary: `${formData.summary}. El nombre de la compañía es: ${formData.company}. El rango salarial es: ${formData.salary} y el tipo de trabajo es: ${formData.type}`,
      description: formData.description,
    };
    onSubmit(jobOffer);
    onHandleStepNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='grid gap-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <Label htmlFor='title'>
              Titulo del puesto
              <span className='text-red-500'>*</span>
            </Label>
            <Input
              id='title'
              name='title'
              placeholder='Software Engineer'
              onChange={handleChange}
              value={formData.title}
              required
            />
            {inputError.title.map((error, index) => (
              <InputError
                key={index}
                msg={error.msg}
                showError={error.isIvalid}
              />
            ))}
          </div>
          <div className='space-y-2'>
            <Label htmlFor='type'>Tipo de trabajo</Label>
            <Select
              name='type'
              value={formData.type}
              onValueChange={(value) =>
                setFormData({ ...formData, type: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder='Seleccione el tipo de trabajo' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='full-time'>Tiempo-Completo</SelectItem>
                <SelectItem value='part-time'>Medio-Tiempo</SelectItem>
                <SelectItem value='contract'>Contrato</SelectItem>
                <SelectItem value='internship'>Prácticas</SelectItem>
                <SelectItem value='temporary'>Temporal</SelectItem>
                <SelectItem value='remote'>Remoto</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='salary'>Rango salarial</Label>
            <Input
              id='salary'
              type='text'
              placeholder='$50,000 - $70,000'
              onChange={handleChange}
              value={formData.salary}
              name='salary'
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='company'>Compañía</Label>
            <Input
              id='company'
              placeholder='Acme Inc'
              value={formData.company}
              name='company'
              onChange={handleChange}
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='summary'>
              Resumen del puesto
              <span className='text-red-500'>*</span>
            </Label>
            <Textarea
              id='summary'
              placeholder='Provee un resumen del puesto'
              value={formData.summary}
              name='summary'
              onChange={handleChange}
              required
              rows={5}
            />
            {inputError.summary.map((error, index) => (
              <InputError
                key={index}
                msg={error.msg}
                showError={error.isIvalid}
              />
            ))}
          </div>
          <div className='space-y-2'>
            <Label htmlFor='description'>
              Descripción del puesto
              <span className='text-red-500'>*</span>
            </Label>
            <Textarea
              id='description'
              placeholder='Describe las responsabilidades y requisitos del puesto'
              value={formData.description}
              name='description'
              onChange={handleChange}
              required
              rows={5}
            />
            {inputError.description.map((error, index) => (
              <InputError
                key={index}
                msg={error.msg}
                showError={error.isIvalid}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='flex gap-4 m-4 justify-center'>
        <Button
          className='flex gap-1'
          type='button'
          variant='outline'
          disabled={isLoading}
          onClick={onBackToSearchJob}
        >
          Regresar
        </Button>
        <Button
          className='flex gap-1'
          type='submit'
          disabled={isLoading || !validateForm()}
        >
          {isLoading && <ReloadIcon className='animate-spin' size='sm' />}
          Enviar
        </Button>
      </div>
    </form>
  );
};
